[Developers/Plugin API/Getting Started/Setup Guide](https://www.figma.com/plugin-docs/setup/)

## Setup Guide
This short guide will walk you through the steps needed to setup your development environment for writing and running a simple plugin inside of Figma. By the end of this guide, you will have a plugin that opens a modal, asks the user for a number, and creates that many rectangles on the canvas.

These instructions intend for you to develop plugins in TypeScript using Visual Studio Code. Neither are mandatory: you can develop plugins in any text editor and use any language which can be translated to JavaScript (including JavaScript itself!). But we find that TypeScript and Visual Studio Code provide the best editing experience. We provide a type definition file to make this experience even better.

## Install Visual Studio Code
Visual Studio Code can be downloaded here: `https://code.visualstudio.com/`.

This lets you use TypeScript, which we think makes developing good plugins much easier.

## Install Node.js and NPM
You can download Node.js here, which will include NPM: `https://nodejs.org/en/download/`.

## Install TypeScript
To install TypeScript, run `sudo npm install -g typescript` in a terminal. (This isn't installed by Visual Studio Code).

## Get the Figma desktop app
At this time, plugin development and testing needs to be done using the Figma desktop app. This is because Figma needs to read your code saved as a local file. The Figma desktop app can be downloaded here:` https://www.figma.com/downloads/`.

If you already have the desktop app, please make sure to update to the latest version, as several features have been added specifically in order to provide a better plugin development experience.

## Log in to your account and open the file editor in the Figma desktop app
You can open any existing document or create a new one.

## Go to Menu > Plugins > Development > New Plugin...
This will bring up the `"Create a plugin"` modal to create a sample plugin. Give it a name, then choose "With UI & browser APIs" in the next screen. Save the plugin anywhere on disk.

## Open the code folder
Open the folder you just created using Visual Studio Code. Plugins are defined using multiple files and you'll want to be able to edit them all of them, so one trick is to open the folder itself rather than any of the files inside it.

## Install the typings
Run `npm install --save-dev @figma/plugin-typings`.

## Set up TypeScript compilation
Hit `??????B (Ctrl-Shift-B for Windows)` in Visual Studio Code, then select tsc: watch `- tsconfig.json`. This tells Visual Studio Code to compile code.ts into code.js. It will watch for changes to code.ts and automatically re-generate code.js every time code.ts is saved.

## Run the sample plugin
Create a new design file in the Figma desktop app. Go to `Menu > Plugins > Development > YourPluginName` to run your newly created plugin. The sample code will show a UI allowing you to choose a number, and then creates that many rectangles.

## Make some test changes
Make some simple changes to code.ts to get familiar with Visual Studio Code and the Figma Plugin API (not code.js ??? that's generated and gets overwritten!).

## Run your new code!
Switch back to the Figma desktop app and go to `Menu > Plugins > "Run Last Plugin" (Or hit ??????P for Mac or Ctrl+Alt+P for Windows)`. This will rerun the last plugin that you ran, i.e. your plugin.

That???s it! You are now ready to develop plugins in Figma!


# Temp
## ??? ?????????(Color Wheel Drawing)
```
ellipse.arcData = {startingAngle: Math.PI/6 - Math.PI/2, endingAngle: -Math.PI/6 - Math.PI/2, innerRadius: 0.5}
```