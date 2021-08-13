# CelestialBodies

Display the main celestial bodies of the Solar system

The application is built with: mongoDB database to hold the celestial body data mongoose to make communication with the database more streamlined and simplified NodeJS as the server ExpressJS as the
NodeJS framework that serves to simplify interacting with the server ReactJS as the natural frontend framework of choice Material-UI is employed to provide prebuilt React components to render the data
Typescript as the typing language of choce for both the back and frontend

The database was populated through the POST endpoint, where JSON was sent through Postman.

## Scripts

In the project src/server directory

### `nodemon server.ts`

Starts the server side of the application.\

The server will reload if you make edits.\
You will also see any lint errors in the console.

In the project src/client directory

### `npm start`

Launches the client side of the application.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
