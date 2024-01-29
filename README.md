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

- Create the puzzle pieces
- Add styling to the puzzle pieces
- Add styling to the puzzle board

## Create the puzzle logic


## Leaderboard