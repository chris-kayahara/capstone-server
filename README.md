
# Photo Mapper
Photo Mapper allows users to compile images while displaying additional information, comments, and GPS locations.

## FRONT END REPOSITORY
This is the front end code

# Links

[Back End Repository](https://github.com/chris-kayahara/capstone-server "BACK END")

# Table of Contents
1. [Getting Started](#start)
2. [Site Map](#map)
3. [Outline](#outline)
4. [Future Improvements](#future)

# Developer Guide
## Getting Started <a name="start"></a>
You will need node installed on your system.
Clone the repo and open it.
Set up your .env using the .env.sample

### On front end run:

`npm install`

`npm start`

### On back end,
Make sure your mysql is setup,
then
run:

`npx knex migrate:latest`

`No need to seed data`

If above doesnt work try:

`node index.js`

## Site Map <a name="map"></a>
  Header --> Home
  Header --> Sign Out

  Home --> User Home Page
  Home --> Sign Up

  Sign UP --> Home
  
  Home --> Upload
  Home --> View Gallery
  Home --> Delete Gallery

  Upload --> Create Gallery

## Outline <a name="outline"></a>
Photo Mapper provides users an efficient way to compile photos with their embeded GPS data in order to display the gallery with additional usefull context. Users can upload their own images that have GPS data already embeded. With this data, Photo Mapper will plot pins on an interactive map along with the photos below with a place to add captions, and descriptions to each. These 'galleries' can then be saved to the users profile 

## Future Improvements <a name="future"></a>
In the future, I plan to add additional features such as generating a sharable link to share with freinds and family, as well as gathering additional information on each photo, such as date/time the photo was taken for more context. Also I would like to add functionality to add GPS data to images that do not have it already. 

# API Reference <a name="api"></a>
Welcome to the Photo Mapper API reference. The API provides various endpoints to interact with the gallery data. Here's a quick guide to help you get started with the Photo Mapper API:

## Base URL

The base URL for the API is: `http://localhost:8080`
Please note this can be changed in the .env file, but will default to port 8080 if no .env file is found

## Endpoints

### POST users to login

`POST /login` 

This endpoint posts login info to attempt login

### POST new users to register

`POST /user` 

This endpoint creates a new user to the DB to login

### GET all images by user

`GET /image/user/` 

This endpoint retrieves all images by user, using the login token to authenticate

### GET document by ID

`GET /document/documentID` 

This endpoint retrieves the document data by the ID

### GET images by document ID

`GET /image/document/documentID` 

This endpoint retrieves the all the images associated with the document ID provided

### POST document by document ID

`POST /document` 

This endpoint posts a new document

### POST images by document ID

`POST /image/` 

This endpoint posts a new set of images associated with the new document

## Conclusion

That's it! You're now ready to test the Photo Mapper API. If you have any questions please contact the developers.
