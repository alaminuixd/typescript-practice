# TypeScript Configaration

## Compail TS code menually

`tsc <filename.ts>`

## Generate a TS config file

`tsc --init`

## Set the root directory for the TS files in the tsconfig.json

"rootDir": "./src" <!-- Specify the root folder within your source files. -->

## Set the output directory for the js files in the tsconfig.json

"outDir": "./dist" <!-- Specify an output folder for all emitted files. -->,

## Automatically compile TS to JS on Save

run command on the terminal `tsc --watch`

## Automatically output the compailed file result on another terminal

-open another terminal and run `node --watch <file/path>`
