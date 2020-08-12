## coding-challenge

This is a shared repo for two parts of a coding challenge - for simplicity I put
each part as its own branch.

# 'Most helpful bar' - branch mostHelfpulBar

This is a javascript code written in ES6, converted with babel to ES2015 (for
browsers that do not support ES6).

1. All the code for that part is located in the `mostHelpfulBar` folder.

2. For simplicity I included the build folder with the correct file already
   converted: `mostHelpfulBar/build/mostHelpfulBar.js`.

3. To convert ES6 with babel, you need to first run `yarn install` or
   `npm install` from the `mostHelpfulBar` directory using command line tool.

4. Then you need to run `yarn babel` or `npm babel` command from the same
   directory - this will create a `mostHelpfulBar/build/` folder with
   `mostHelpfulBar.js` file that contains the right code in `es2015` that is
   supported by older browsers.

Additional notes for that part of the project:

1. The css is written with mobile first principles with one breakpoint at
   `min-width 600px`.

2. The image gets wrapped in additional container along with the additional bar
   for better positioning both on the page.
