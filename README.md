# puzzla
 A drag and drop puzzle game built with html, css and javascript.

 Create the following files in your project folder:
  - index.html
  - style.css
  - script.js
We will be using the `index.html` file to create the structure of our page. We will be using the `style.css` file to add styling to our page. We will be using the `script.js` file to add functionality to our page.
## Create the puzzle UI
## Create the puzzle page structure
We will start off by creating the structure for our page in the `index.html` file. Our page consist of different sections which are;
- The header section: which consist of the logo, the controls and other game information.
- The puzzle board: which consist of the puzzle pieces.
- The footer section: which consist of the game hint.

All this sections will be created in the `index.html` file using the code below.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Puzzla | javascript alpha/numeric puzzle</title>
    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <div id="logo">
        <svg
          width="46"
          height="54"
          viewBox="0 0 46 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 37.996V15.504L23 4.05837L42.5 15.504V37.996L23 49.4416L3.5 37.996Z"
            stroke="#09090B"
            stroke-width="7"
          />
          <path
            d="M15.5 31.996V22.754L23.5 18.0584L31.5 22.754V31.996L23.5 36.6916L15.5 31.996Z"
            stroke="#09090B"
            stroke-width="7"
          />
        </svg>
        &nbsp;Puzzla
      </div>
      <div id="controls">
        <button type="button">⛰</button>
        <button id="game-type" type="button">123</button>
        <button id="pause" type="button">▶</button>
        <span id="timer">00:00</span>
        <span>Lvl:&nbsp; <span id="level">1</span></span>
      </div>
    </header>
    <main id="puzzle">
      <div class="piece">34</div>
      <div class="piece">54</div>
      <div class="piece">13</div>
      <div class="piece">23</div>
      <div class="piece">62</div>
      <div class="piece">56</div>
      <div class="piece">85</div>
      <div class="piece">92</div>
      <div class="piece">21</div>
    </main>
    <footer><b>Hint:</b> Click an item then click on where to place it.</footer>
    <script src="script.js"></script>
  </body>
</html>
```

## Add styling to the puzzle UI
If you preview the page in the browser, you will notice that the page is not styled. We will add styling to the page in the `style.css` file. We will start by adding styling to the header section.
### Add styling to the html body
We will style the html body to get the desired layout with the following code.
```css
body {
        display: flex;
        flex-flow: column nowrap;
        padding: 20px 0;
        margin: 0 auto;
        width: clamp(300px, 80%, 550px);
        font-family: "Montserrat", sans-serif;
        gap: 40px;
        text-align: center;
      }
```
### Add styling to the header section
We will add the following styles to the header section.
```css
header {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        gap: 20px;

        #logo {
          height: clamp(30px, 50%, 60px);
        }

        #logo {
          font-size: clamp(1.5rem, 1.5rem + 1.7857vw, 2.5rem);
          font-weight: 700;
          color: #09090b;
          display: flex;
          align-items: center;
        }

        #controls {
          display: flex;
          gap: 15px;
        }

        #controls > * {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 35px;
          background-color: #f4f4f5;
          color: #09090b;
          border-radius: 5px;
          border: none;
          padding: 0 8px;
          font-size: 1.25rem;

          &:is(#game-type) {
            width: 55px;
          }

          &:is(#timer) {
            width: 60px;
          }

          &:is(button):hover {
            background-color: #09090b;
            color: #f4f4f5;
          }
        }
      }
```

### Add styling to the puzzle board
We will add the following styles to the puzzle board.
```css
#puzzle {
        color: white;
        display: grid;
        border: 2px solid #f4f4f5;
        border-radius: 1rem;
        gap: clamp(0.625rem, 0.2455rem + 1.7857vw, 1.125rem);
        grid-template-columns: repeat(3, 1fr);
        aspect-ratio: 1 / 1;
        padding: clamp(0.925rem, 0.2455rem + 1.7857vw, 1.95rem);

        .piece {
          border-radius: 0.625rem;
          aspect-ratio: 1 / 1;
          display: flex;
          font-size: clamp(1.5rem, -6.3846rem + 27.6923vw, 4.5rem);
          font-weight: 700;
          justify-content: center;
          align-items: center;
          color: #09090b;
          background-color: #f4f4f5;

          &:hover {
            cursor: pointer;
            border: 1px solid #09090b;
          }
        }
      }
```


- Create the puzzle pieces
- Add styling to the puzzle pieces
- Add styling to the puzzle board

## Create the puzzle logic


## Leaderboard