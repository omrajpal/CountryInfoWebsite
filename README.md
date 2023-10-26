Country Info App

This application allows users to input a country name and retrieve detailed information about the country. The frontend is built using React, and the backend is powered by Node.js with Express, fetching data from the REST Countries API.

Here is some information on the design, tools, libraries, etc. used, and then further down you can find information on how to set up and run this web application.


Country Info App: In-depth Technology Overview

Frontend - 

React
    Description: React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components.
    Usage in Project: The entire frontend is built using React. Components like InputComponent, CountryInfoComponent, LoadingComponent, and ErrorComponent are all React components.

Axios
    Description: Axios is a promise-based HTTP client for the browser and Node.js. It makes it easy to send asynchronous HTTP requests.
    Usage in Project: Axios is used to make GET requests from the frontend to the backend server to fetch country information.

Create React App (CRA)
    Description: CRA is a tool that sets up a new React project with a good default configuration. It abstracts away complex configuration and allows developers to focus on writing code.
    Usage in Project: The frontend project was bootstrapped with CRA, which provided the initial project structure, build scripts, and development server.

Chakra UI
    Description: Chakra UI is a simple, modular, and accessible component library that provides building blocks to construct your React applications.
    Usage in Project:
        ChakraProvider: It's the context provider for Chakra UI. All components should be nested inside it to ensure proper styling and theming.
        Box, Text, Flex, Heading, Icon: These are basic building blocks provided by Chakra UI. They are used to structure and style the UI.
        bgGradient, color, p, maxW, etc.: These are Chakra UI's style props, which allow for a more declarative way to apply styles directly to components.

React Spring
    Description: React Spring is a spring-physics based animation library that covers most UI-related animation needs.
    Usage in Project:
        useSpring: This hook is used to create spring animations. In your app, it's used for a fade-in effect.
        animated: It's a special kind of React component that has a style property that can receive animated values.

React Icons
    Description: React Icons incorporates popular icons from various libraries into a single, consistent API.
    Usage in Project:
        FaGlobeAmericas: This is an icon from the Font Awesome library, representing a globe. It's used in the heading of your app.


Backend

Node.js
    Description: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side.
    Usage in Project: The backend server runs on Node.js, enabling server-side logic using JavaScript.

Express
    Description: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
    Usage in Project: Express is used to create the backend server and define the API endpoint (/api/country/:countryName) that the frontend interacts with.

Axios
    Description: As mentioned, Axios is a promise-based HTTP client.
    Usage in Project: On the backend, Axios is used to fetch country data from the REST Countries API.

Heroku (for deployment)
    Description: Heroku is a cloud platform that lets developers build, deliver, monitor, and scale applications. It abstracts away infrastructure management.
    Usage in Project: The backend can be deployed to Heroku, making it accessible over the internet.

CORS Middleware
    Description: CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers. The CORS middleware for Express allows you to configure these headers, ensuring that your API can be safely accessed from specific origins.
    Usage in Project:
    app.use(cors()): This line adds the CORS middleware to your Express app. This is essential when your frontend and backend are hosted on different domains or ports, especially during local development.

Error Handling
    Description: Proper error handling ensures that your application can gracefully handle unexpected situations and provide meaningful feedback to the client.
    Usage in Project:
    In the /api/country/:countryName route, you've added checks to handle potential issues when fetching data from the REST Countries API. This includes checking if the country data exists and handling different types of errors (like 404 - Not Found or 500 - Internal Server Error).



How to set up and run this web application:

Prerequisites:

Node.js and npm
Heroku CLI (for backend deployment)


Setup:

Backend Setup - 

Navigate to the backend directory:
cd path/to/country-info-backend

Install the required packages:
npm install

Frontend Setup - 
Navigate to the frontend directory:
cd path/to/country-info-app

Install the required packages:
npm install


Running the Application Locally:

Backend - 
In the backend directory, start the server:
node server.js

The server will start on port 3001.

Frontend - 
In the frontend directory, start the React app:
npm start

The app will open in your default browser, typically at http://localhost:3000.
Enter a country name in the input field and click "Search" to retrieve information about the country.

