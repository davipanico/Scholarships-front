# Scholharship api reader.

<p align="center">
 <a href="#objective">Objective</a> • 
 <a href="#tecnology">Tecnology</a> • 
 <a href="#how to use">How to Use</a> • 
</p>

# Objective

This project has the objective of collect data from a api and transform into a table, showing informations like course name, price, location and a modal to see further details.

# Tecnology

- React.JS 
- Axios
- TypeScript
- antd/styled-components (for design)
- eslint (to ensure code syntax)

Before use this app, you need to have node version 16.7.0 installed on your computer, after installing you're good to go!

# How to use

First you need to clone this repo
 - https://github.com/davipanico/Scholarships-front

Install dependecies
 - npm install

Configure you env
 - You will see a file named .env-example, just made a copy of this file and rename him to .env, at REACT_APP_APIROUTE= put the api URL.
 - set "https://testapi.io/api/Jonas-buriti"

Then start the app
 - npm start

Possibly errors
- If scholarshipDetails.tsx inform that <Modal> doenst have a children prop you need to go ~user\scholarships-front\node_modules\antd\lib\modal\Modal.d.ts and add children: React.ReactNode at ModalProps. This erro occurs because of bug on antd package with typeScript.


Or just acess https://react-heroku-scholarship.herokuapp.com/

Thank you!



