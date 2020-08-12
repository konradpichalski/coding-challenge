## coding-challenge

This is a shared repo for two parts of a coding challenge - for simplicity I put
each part as its own branch.

# 'Compare quotes' - branch quotesCompare

This is a simple HTML file that includes a quotes compare component, with
styling done using sass preprocessor.

1. All the code for that part is located in the `quotesCompare` folder.

2. I included the build folder with the correct css file already converted:
   `quotesCompare/build/`.

3. To run the build, you can just open the `quotesCompare/build/index.html`
   file, alternatively you can run a simple live-server with node-sass
   preprocessor (see instructions below).

To run the project as a live server:

1. Make sure you have node.js installed on your machine.

2. You need to run `yarn install` or `npm install` from a command line tool from
   within the `quotesCompare` directory.

3. To run the app, you need to use `yarn start` or `npm start` command line from
   the same directory - this will use `concurrently` npm package that runs both
   `live-server` and `node-sass` preprocessor.
