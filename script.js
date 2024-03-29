// create varaiables for storing the game state
let currentLevel = 1;
let noOfColumns = 3;
let gameType = "123";
let timer;
let currentPieces = [];
let initialPieceIndex = ''

// get dom elements
const gameTypeButton = document.querySelector("#game-type");
const levelButton = document.querySelector("#level");
const pauseButton = document.querySelector("#pause");
const puzzle = document.querySelector("#puzzle");
// pauseButton.innerHTML = "⏯ ▶️ ▶ ⏯  ⏸";

// array of tailwind css color names
const colors = [
  "red",
  "slate",
  "orange",
  "yellow",
  "green",
  "blue",
  "neutral",
  "purple",
  "emerald",
  "pink",
  "gray",
  "teal",
  "cyan",
  "lime",
  "amber",
  "indigo",
  "emerald",
  "fuchsia",
  "violet",
  "rose",
  "sky",
  "stone",
  "pink",
  "zinc",
  "orange",
  "rose",
];

// no of pieces for the puzzle grid
const calculateColumnNumbers = () => currentLevel == 1 ? 3 : currentLevel == 2 ? 4 : 5;

// change the game type
const changeGameType = () => {
  
  console.log(gameTypeButton.innerHTML)
  gameType = gameTypeButton.innerHTML === "ABC" ? "123" : "ABC";
  gameTypeButton.innerHTML = gameType;
  startAndSetPieces();
};


// change piece position in the array on click
const changePiecePosition = (index) => {
  // put the initial piece in the index of the clicked piece
  let newPieces = [...currentPieces]
  initialPiece = newPieces[initialPieceIndex]
  newPieces.splice(initialPieceIndex, 1);
  newPieces.splice(index, 0, initialPiece);

  initialPieceIndex = '';
  currentPieces = newPieces;

  // check if the pieces are sorted
  if (checkIfPiecesAreSorted(currentPieces)) {
    currentLevel = currentLevel === 3 ? 1 : currentLevel + 1;
    levelButton.innerHTML = currentLevel;
    startAndSetPieces();
    alert("You won");
  }
};

// add pieces to the dom
const addPiecesToDom = () => {
  puzzle.innerHTML = "";
  currentPieces.forEach((item, index) => {
    const piece = document.createElement("div");
    piece.setAttribute("data-index", index);
    piece.classList.add("piece");
    piece.classList.add(item.randomColor);
    piece.addEventListener("click", () => {
      console.log("clicked", piece.dataset.index);
      initialPieceIndex === '' ? initialPieceIndex = piece.dataset.index : (changePiecePosition(index), addPiecesToDom());
      
    });
    piece.innerHTML = item.piece;
    puzzle.appendChild(piece);
  });
  // set puzzle grid columns
  puzzle.style.gridTemplateColumns = `repeat(${noOfColumns}, 1fr)`;
}

// create a function for generating an array of unique random capital alphabets or numbers and color of provided length
const generateRandomPieces = (length) => {
  const createdArray = [];

  while (createdArray.length < length) {
    const randomItem =
      gameType === "123"
        ? String.fromCharCode(Math.ceil(Math.random() * 25) + 65)
        : Math.ceil(Math.random() * 99);
    const randomColor = colors[createdArray.length];
    
    // check if the random item is already in the array
    if (!(createdArray.filter(item => item.piece === randomItem).length > 0)) {
      createdArray.push({ piece: randomItem, randomColor });
    }
  }

  currentPieces = createdArray;

  // add pieces to the dom
  addPiecesToDom();
};

// create a function checking if an array of objects with random alphabets or numbers and colors are sorted
const checkIfPiecesAreSorted = (array) => {
  let sortedArray

  if (gameType === "123") {
    // sort alphabetically
    sortedArray = [...array].sort((a, b) => {
      // would have needed converting to uppercase but the alphabets are already uppercase
      if (a.piece < b.piece) {
        return -1;
      }
      if (a.piece > b.piece) {
        return 1;
      }

      // names are already equal
      return 0;
    });
  } else {
    sortedArray = [...array].sort((a, b) => a.piece - b.piece);
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].piece !== sortedArray[i].piece) {
      return false;
    }
  }

  return true;
};

function startAndSetPieces() {
  noOfColumns = calculateColumnNumbers();
  generateRandomPieces(noOfColumns**2);
};

startAndSetPieces();