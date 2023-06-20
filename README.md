
# Notes Sharing and Doubt Solving Platform

Welcome to the Notes Sharing and Discussion Forum project! This is a web-based platform that provides users with the ability to share and discuss notes, as well as engage in conversations with fellow users. This project includes user account management functionalities, such as user registration, login, and password recovery, along with features like post creation, upvoting and downvoting mechanisms, discussion threads, and search functionality.

The project is developed using MERN Stack and is designed to be user-friendly, intuitive, and efficient. This project is aimed at improving user experience and making it easy for users to share and discuss notes in a secure and reliable manner.

We hope that this project will be useful for individuals and groups who are interested in collaborating and sharing knowledge on various topics. Please feel free to explore the code and contribute to the project by submitting pull requests or issues. Thank you for your interest in our project!

## SRS Document

[Document](https://docs.google.com/document/d/1JNK1l1UVuzRfeEsbTi0GyLNAc9kq2Gm5/edit?usp=sharing&ouid=103229390666509090327&rtpof=true&sd=true)

## Demo

Video Link : https://www.youtube.com/watch?v=hrPbWc7mh8o

Website Link : https://harshsojitra007.github.io/CodeStudy/

## Installation Guide

* [Project-Installation-Guide](#project-installation-guide)
# Project-Installation-Guide
- Create a `.env` file at `server/`
- Add the following details correctly,
```
PORT=portNumber

DB_PASS=YourMongodbDatabasePassword
DB_USER=YourMongodbDatabaseUsername

EMAIL_NAME=YourEmail
// The above email will be used to send mail for verification of client and for updates.

EMAIL_PASS=UniquePasswordGeneratedByGoogleForNodemailer
// Go to https://myaccount.google.com/
// There you need to look for Third Party Access Manager
// Add nodemailer as application and Google will auto-generate a password that you'll use here
// Note: this is not your original password. This password is used to identify nodemailer and access your account without using your original password.

DEFAULT_PROFILE_PIC=APublicURLOfPhoto

// Set-up an account at cloudinary and fill below details
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_SECRET_KEY=

JWT_SECRET=AnySecretKeyToGenerateJWTTokens
JWT_EXPIRES_IN=SpecifyTimeInConventionsForExpiryOfTokensGenerated
```
### Please note the below 4 points and change it accordingly to correctly run the project.
- Go to `client/src/App.jsx` and at Line no. 27 change the state value of `cloudName` to the name of your cloud.
- Go to `client/src/services/appApi.js` and change the value of `baseUrl` at line no. 7 to `http://localhost:5000`. Also note that here `5000` is the `port number` of backend. For running the project correctly you must mention same port number as your backend have.
- rum `npm i` at both `server/` and `client/` folders.
- Run `npm start` to start the project in both `server/` and `client/` folder.

## Features

1) Note Sharing: Users can create and share notes on various topics.

2) Upvoting and Downvoting: Users can upvote or downvote notes shared by other users.

3) Discussion Threads: Users can start discussion threads on various topics and engage in meaningful conversations with other users.

4) Search Functionality: Users can search for notes, discussion threads, and other content using a search bar.

5) User Profile: Users have their own profiles where they can view their activity history, their posts, and their comments.

Security: The platform is designed with security in mind to ensure that user data is protected.


## Authors

- [@DAKSHAY SOLANKI](https://github.com/DAKSHAY111)
- [@HARSH SOJITRA](https://github.com/harshsojitra007)

