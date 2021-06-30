
# Unity Game Listings App: Front-end

a simple web based front-end interface with a form to add more game tiles to the
backend service

The front-end is built with the following technologies:

	* react.js
    * react-hook-form
    * axios

## Table of Contents
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Environment Setup](#environment-setup)
- [Styles](#styles)
- [Form Validation](#form-validation)
- [Contributors](#contributors)


## Setup

* clone the repository and `cd` into the directory
* `npm install`

## Running the Application

### Pre-requisites

In order for this app to work completely, the backend server will need to be running as well to process the requests from this app.

### Development mode

```npm start```

This runs the react app in development mode. The app will be available on http://localhost:3000/

## Environment Setup

The .env file will need to be populated with a ```REACT_APP_API_SERVER``` key which references the backend server running. 

The app will leverage two APIs which are fulfilled when the backend server is running:
 - ```<REACT_APP_API_SERVER>/api/game```
  to submit new game listings via POST

 - ```<REACT_APP_API_SERVER>/api/upload```
  to upload images to google cloud storage via POST



## Styles

### CSS
 
Plain CSS was used as the project was small and did not require mixins and complex variables. 

Component specific styles exist under each component's folder. 
For example, component checkbox will look like this:
```
checkbox
 -index.jsx
 -styles.css
 ```

All other generic styles are applied in the ```App.css``` file. 


## Form Validation

### React Form Hook
To read more about this hook, please visit https://react-hook-form.com/get-started

Run the following command
```npm install react-hook-form```

Import the hook into your component

```import { useForm } from "react-hook-form"```




## Contributors
Jumanah Al Asadi 
jumanahalasadi@gmail.com