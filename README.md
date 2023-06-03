# Brainflix Server

Welcome to the Brainflix server! This readme file provides an overview of the server built using Express.js. The server is responsible for handling various endpoints related to video streaming, including fetching video data, adding new videos, adding comments, deleting comments, and liking videos.

## Project Structure

The server is structured as follows:

- `index.js`: The main entry point of the server.
- `data`: This directory contains the JSON files used to store video and comment data.
- `routes`: This directory contains the route handlers for different endpoints.
- `utils`: This directory contains utility functions used in the server.

## Dependencies

The server utilizes the following major dependencies:

- Express: A fast and minimalist web framework for Node.js.
- fs: A built-in Node.js module for interacting with the file system.
- nodemon: A utility that automatically restarts the server when changes are detected during development.

## API Endpoints

The server exposes the following API endpoints:

- `GET /videos`: Returns a list of all videos.
- `GET /videos/:videoId`: Returns information about a specific video.
- `POST /videos`: Adds a new video.
- `POST /videos/:videoId/comments`: Adds a new comment to a specific video.
- `DELETE /videos/:videoId/comments/:commentId`: Deletes a comment from a specific video.
- `PUT /videos/:videoId/like`: Increments the like count for a specific video.

## Installation and Setup

To set up the Brainflix server on your local machine, follow these steps:

1. Clone the repository from GitHub:

git clone https://github.com/NehaDhaka/neha-dhaka-brainflix-api

2. Navigate to the server directory:

cd neha-dhaka-brainflix-api

3. Install project dependencies using a package manager:

npm install

4. Start the server in development mode using nodemon:

nodemon index.js

The server should now be running on `http://localhost:8080`. You can test the API endpoints using tools like Postman or by making requests directly from your frontend application.

Please note that you may need to configure the server's environment variables and settings to fit your specific requirements, such as database connections or deployment configurations.

Feel free to explore and customize the Brainflix server to meet your needs for video streaming!

**Note:** The server should be used in conjunction with the Brainflix frontend application to provide a complete video streaming experience. Make sure to follow the frontend setup instructions as well to ensure proper integration. https://github.com/NehaDhaka/neha-dhaka-brainflix
