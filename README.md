## Boilerplate README

#### About:

This is a boilerplate-bootstrapper for creating electron applications, leveraging react, redux, and react-router.
Everything is pre-configured to load off of a client server with live updating in development mode, or off of a static HTML file in production mode.

#### Use case:

To rapidly develop generic react/redux apps with a small amount of business logic/customization. An attempt to condense
the first ~2 weeks of project development into a 10 minute action, by programatically replicating repetitive tasks and
project setup.

__this is the development repo for the project, the final production build will be distributed by installer__

#### Main Stack:

- Electron
- React
- Redux
- express (Development)

bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Developed By:

David Sabadash

---
### DEVELOPMENT

There are multiple options for development. This can be run and developed the traditional way using a browser window,
but the recommended way is with npm run electron-dev 

##### Setup commands:

`npm run electron`
- *ceates an electron window*
- *tries to load './build/index.html by default*
- *will not load anything if build has never been called*

`npm run build`
- *builds application into a single folder with condensed sourcecode*
- *entrypoint for application is ./build/index.html*
- *this is the original create-react-app build command*

##### Browser development:

`npm start || npm run start`

- *App is running at localhost:3000*
- *used for browser development mode*
- *Hot reloading is enabled*
- *`npm run electron` can be used at any time to open an electron window connected to the app (simultaneous browser / electron development windows)*

##### Electron development:

`npm run electron-dev`

- *App is accessed from localhost:3000*
- *used for electron development mode*
- *browser window auto open is disabled, but can still be accessed through a browser manually unless craco.config.js is overriding webpack*
- *using craco.config breaks browser development for some reason*
- *Hot reloading is enabled*
- *closing the electron window automatically shuts down the client server*

`npm run electron-dev-tools`

- *does all of the above*
- *makes default window size a little larger, installs Redux-devtools, auto opens Developer tools, and composes the store with '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'*


##### Electron build:

`npm run electron-build`

- *App is accessed through a static file*
- *build command is executed to output minified source code*
- *waits until build is finished to open electron container*
- *Hot reloading is DISABLED*
- *Used to simultaneously re-build and run the application*

`npm run electron-prod`

- *Only opens an electron window pointed at ./build/index.html*
- *assumes code has been pre-built*
- *Hot reloading is DISABLED*
- *Used to run a container pointed at the production file destination without rebuilding the app from source*

---

### PRODUCTION

#### App packaging:

`npm run pack`

- *bundles all application source into dist folder*
- *creates executable for current host OS*
- *package.json build:{} provides packaging args, asar controls dist source archiving*

`npm run dist`

- *does all of the above*
- *also provides an installer that moves app source to default host program directory*
- *installer will also create a desktop shortcut for the app*

---

## See the boilerplate for this app at:
[electron-React boilerplate](https://github.com/DRsabadash/electron-react-boilerplate).
