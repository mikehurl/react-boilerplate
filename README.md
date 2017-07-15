## React, Babel, Webpack & Jest

#### Instructions/boilerplate for setting up a project utilising React and related tools.

Below is a condensed set of steps to take to initialise a project using the the tools I am currently interested in (mid-July 2017):
- `mkdir <project>`
- `cd <project>`
- `git init`
- `npm init` (respond to prompts)
- `mkdir __tests__ dist src src/components utils`
- `touch .babelrc .env .gitignore webpack.config.js __tests__/app.test.jsx src/index.html src/index.jsx src/components/App.jsx utils/styles.js`
- `npm install --save-dev babel-core babel-jest babel-loader babel-preset-env babel-preset-react enzyme eslint@3.19.0 eslint-plugin-react html-webpack-plugin jest react-hot-loader react-test-renderer webpack webpack-dev-server`
- `npm install --save prop-types react react-dom styled-components`
- `./node_modules/.bin/eslint --init` (respond to prompts)

This project was created with the aim of seeing if I could produce code as a good starting place, with scripts, to run a dev server (with hot reloading); to run tests with Jest (and Enzyme) and report on coverage; and to run linting with ESLint. It uses Babel to allow for the use of latest Javascript features. It also is set up to take advantage of Styled Components and has initial styles set to utilise CSS Grid.

#### Instructions for using the repo

It may be possible to take advantage of github and use the below instructions to more quickly set up a project. I used Node 8.1.3 during this project.
- `git clone URL` will download the files
- ` cd react-boilerplate` will move you to the root of the repo
- `npm install` will install dependencies and devDependencies listed in package.json


- `npm build` will create a bundle.js file within dist/
- `npm start` will load the dev server, which you can visit by going to http://localhost:8080/ in your browser - with the hot loader, any chances you make to code will be reflected in the browser once the file is saved, with no need for a manual refresh
- `npm lint` will check your files against recommended eslint rules as well as the eslint-plugin-react package rules, set to support ES6 global variables and syntax, with global 'strict mode' and JSX enabled
- `npm test` will run your tests and show your test coverage stats. Tests are run in watch mode, so like hot loading, tests will run on a file being edited and saved


#### Libraries and packages

###### UI
- [React](https://facebook.github.io/react)
- [PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
- [ReactDOM](https://facebook.github.io/react/docs/react-dom.html)
- [styled-components](https://www.styled-components.com)

###### Modern Javascript
- [Babel](http://babeljs.io)
- [babel-core](http://babeljs.io/docs/core-packages)
- [babel-loader](https://github.com/babel/babel-loader)
- [babel-preset-env](https://babeljs.io/docs/plugins/#presets-official-presets)
- [babel-preset-react](https://babeljs.io/docs/plugins/preset-react)

###### Testing
- [Enzyme](http://airbnb.io/enzyme)
- [Jest](https://facebook.github.io/jest)
- [babel-jest](https://github.com/facebook/jest/tree/master/packages/babel-jest)
- [react-test-renderer](https://www.npmjs.com/package/react-test-renderer)


###### Linting
- [eslint@3.19.0](http://eslint.org) *At the time of creation, I could not get this project to work with eslint@4.x*
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)


###### Module bundling
- [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)
- [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [webpack](https://webpack.js.org)
- [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)
