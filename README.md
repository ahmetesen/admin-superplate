# Getting Started with Admin Superplate

This superplate was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Used Techs: 
 - Typescript
 - Antd
 - i18next
 - Jotai

## Service models

If you have an API and a swagger documentation, you can create a swagger documentation with that script. Replace your remote API address from generate-api-models script. Also you can change typescript-fetch with typescript-axios if you would.

## State management

No need to use redux, context api etc. You can store whatever you want in atoms (Jotai feature).

## Design System

This version uses antd 5. For responsive design management or data tables or other features, you can use Antd's features.

## Style management

This version uses Sass and css modules. If you need to write common style classes, you have to write it on src/styles/{yourfilename}.scss. If you style a component, than you have to write it on the component's same path with components name and '.module.scss'.

## i18next

It is actually language management. But even if you write a project in only one culture, still you shouldn't write any static texts in your ts files. Please write them on the language json.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.