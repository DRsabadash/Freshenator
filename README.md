## Boilerplate README

#### About:

This is the a boilerplate for creating electron applications, leveraging react, redux, and react-router.
Everything is pre-configured to load off of a client server with live updating in development mode, or off of a static HTML file in production mode.
This allows for easy distribution of a built application with a minified source, and optimized performance with no overhead of running a client server.

#### Main Stack:

- Electron
- React
- Redux
- express (Development)

bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Developed By:

David Sabadash

#### React boilerplate code by:
Brendan Walker & Jiawei Wu

---
### DEVELOPMENT

There are multiple options for development. This can be run and developed the traditional way using a browser window,
but the recommended way is with npm run electron-dev 

##### Setup commands:

`npm run electron`
- *ceates an electron window*
- *tries to connect to http://localhost:3000 by default*
- *will not load anything if client server is not already running*

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
- *browser window auto open is disabled, but can still be accessed through a browser manually*
- *Hot reloading is enabled*
- *closing the electron window automatically shuts down the client server*

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

## GUIDELINES
*Taken verbatim from freshworks-react boilerplate readme*

#### Files/Components:

- Consistent file naming scheme
i.e. Home.js -> HomeSidebar.js -> HomeFooter.js

- Containers (i.e. Home.js) contain logic and state (connect to redux) and pass props to sub components (i.e. HomeSidebar.js)

- Put reusable components in one folder in components folder: components -> common -> Countdown.js, GoogleMap.js, etc.

- Component classes are named the same as the files in which they are contained
i.e. Nav.js -> ```class Nav extends Component {...}```

- Organize imports in all files - modules at top, components below modules
- Mixed/named imports first, default imports second
- @/someAppRootLevelDir/someFile format
- ./SomeFile for local files

i.e. (in order) 

~~~
import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import * as Routes from '@/constants/routes';
import Sidebar from './Sidebar';
etc
~~~

- Lifecycle methods right underneath constructor

i.e. (in order) 

~~~
constructor() {...}
componentDidMount() {...}
handleSubmit() {...}
etc
~~~

---

## Planned features
- Integrating Jest unit testing
