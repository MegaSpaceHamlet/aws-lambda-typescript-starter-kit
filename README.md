# AWS Lambda Typescript Starter Kit

Clone the project. 

Modify project name, compiler target and so on. 

Don't forget to run `npm install`. 

The build script uses `esbuild` to bundle and minify your project. 

The zip archive will be in the `dist` folder.

`npm run test` will build the project and execute `test.js`. 

Run `git remote remove origin`, or rename it if you wish.

## Handling Errors

Being that the `handler` function requires a certain structure, the class `LambdaError` is provided.

You can either `return` a `new LambdaError`, or use the `returnError` function from the same file. 

That way you will get effective error handling and informative error messages.
