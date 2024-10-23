
# Online Casino Project

This online casino project is a web application with a React frontend (client) and a Node.js backend (server) using TypeScript. The project is designed to run locally on `localhost:3001` and can be deployed to Heroku.

### Prerequisites

- **Node.js** (v14.x or above)
- **npm** 
- **git**
- **Heroku CLI** (if you want to deploy to Heroku)

# Getting Started

## Clone the Repository

### 1. Clone the Repository
```bash
git clone <repository-url>
cd my-app

### Install Dependencies

1. Navigate to the project root directory and install the root dependencies:
   ```bash
   npm install
   ```

2. Install the client and server dependencies:

   - Navigate to the client folder:
     ```bash
     cd client
     npm install
     ```

   - Navigate to the server folder:
     ```bash
     cd ../server
     npm install
     ```

### Environment Setup

1. Create a `.env` file in the `/server` directory and configure it as follows:
   ```env
   PORT=3001
   ```

### Running the Project Locally

1. **Start the server**:
   - Navigate to the root directory and run:
     ```bash
     npm start
     ```

2. This command will:

Install dependencies for both the server and client.

Build the client.

Copy the built files to the server's public directory.

Start the server.

The application will run on http://localhost:3001.

### Making Changes to the Client

If you make changes to the React client and want to build the production version and serve it through the server:

1. Navigate to the `client` folder:
   ```bash
   cd client
   ```

2. Build the client:
   ```bash
   npm run build
   ```

3. Copy the build files to the server's public directory:
   ```bash
   cp -r build/* ../server/public/
   ```

## Running Tests

- **Client Tests**:
  In the `client` directory, run:
  ```bash
  npm test
  ```

- **Server Tests**:
  In the `server` directory, run:
  ```bash
  npm test
  ```

## Deployment to Heroku

To deploy this project to Heroku, follow these steps:

1. **Login to Heroku**:
   ```bash
   heroku login
   ```

2. **Create a Heroku App**:
   ```bash
   heroku create <app-name>
   ```

3. **Set git for remote**:
   ```bash
   heroku git:remote -a <app-name> 
   ```

4. **Set Buildpacks**:
   For the API
   ```bash
   heroku buildpacks:set heroku/nodejs --app your-api-app
   ```

   For the web
   ```bash
   heroku buildpacks:add --index 1 https://github.com/timanovsky/subdir-heroku-buildpack.git -a <app-name>
   ```


5. **Deploy the project**:
   ```bash
   git push heroku main
   ```

Heroku will automatically run the `heroku-postbuild` script after deployment, which will build the React client and copy the necessary files to the `server/public` folder.

### Technologies Used

- **React** for the frontend
- **Redux** for state management
- **SASS** for styling
- **Node.js** with **TypeScript** for the backend
- **Express** as the web server
- **Axios** for API calls 
- **Jest** Testing framework.
- **dotenv** Environment variable management

### Packages Used

#### Client (React):
- **React**: JavaScript library for building user interfaces.
- **React-DOM**: Enables React to interact with the DOM.
- **React-Router-DOM**: Handles navigation between different views in the application.
- **React-Scripts**: Scripts and configuration for running and building a React app.
- **SASS**: Preprocessor scripting language that extends CSS.
- **Redux Toolkit**: State management tool for React.
- **Axios**: Promise-based HTTP client for making API requests.
- **React-Redux**: Official bindings to integrate Redux with React.
- **Testing-Library (React, User-Event, DOM, Jest-DOM)**: Utilities to test React components in a user-focused way.

#### Server (Node.js with TypeScript):
- **Express**: Web framework for building APIs.
- **TypeScript**: Superset of JavaScript with static typing.
- **TS-Node**: Runs TypeScript code directly in Node.js.
- **Dotenv**: Loads environment variables from a `.env` file.
- **Jest**: Testing framework for running unit tests.

#### Dev Dependencies (Client/Server):
- **ESLint/Prettier**: Tools for enforcing code style and formatting.
- **TypeScript-ESLint**: ESLint plugin for TypeScript.
- **TS-Jest**: Jest preset for TypeScript.



