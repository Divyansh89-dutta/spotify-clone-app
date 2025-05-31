# Spotify Clone Application

## Overview

This is a clone of the popular music service platform Spotify, built using modern web development technologies. The project aims to replicate core features of Spotify, allowing users to listen to music and also to chat in realtime and to get the music activities of other users. 

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation-and-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features:

- **User Authentication**: Uses clerk platform for authentication.
- **Realtime chat**: Users can chat in realtime with other users while listening to music.
- **User Activities**: Users can see the realtime music activities of other users .
- **Responsive Design**: The application is optimized for desktop and mobile devices.

## Technologies Used:

- **Frontend**: React.js, react-router-dom, Zustand, Tailwind css, shadcn ui.
- **Backend**: Node.js, Express.js.
- **Realtime Features**: Socket io.
- **Database**: MongoDB.
- **Authentication**: Clerk Authentication platform.
- **Tools and ORM**: Mongoose, Vite, npm.


## Installation and setup:

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd spotify-clone-app
    ```
    
2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Access the application:
    ```
    http://localhost:3000
    ```

## Usage:

1. **Sign Up/Log In**: Signup / Login with clerk's google OAuth.
2. **Listen to music**: Listen to the songs and albums.
3. **Chat with users**: Chat with users to find different music interests.
4. **View Activities**: View realtime music activities of people.

## API Endpoints:

- **Authentication**
  - `POST /api/auth/callback`: Registers or Log's in a new user.

- **Users**
  - `GET /api/users`: Fetches all the users.
  - `GET /api/users//messages/:userId`: Fetches the user messages.

- **Admin**
  - `GET /api/admin/check`: Checks for Admin access.
  - `POST /api/admin/songs`: Creating a song.
  - `DELETE /api/admin/songs/:id`: Delete a song.
  - `POST /api/admin/albums`: Creating an album.
  - `DELETE /api/admin/albums/:id`: Delete an album.

- **Stats**
  - `GET /api/stats`: Fetches total number of Songs, Albums, Artists and Users.

- **Songs**
  - `GET /api/songs`: Fetches all the songs.
  - `GET /api/songs/featured`: Fetches the featured songs .
  - `GET /api/songs/made-for-you`: Fetches the suggested songs .
  - `GET /api/songs/trending`: Fetches the trending songs .

- **Albums**
  - `GET /api/albums/`: Fetches all the albums.
  - `GET /api/albums/:albumId`: Fetches single album.
 
## Contributing:

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch ```(git checkout -b feature/YourFeatureName)```.
3. Commit your changes ```(git commit -m 'Add some feature')```.
4. Push to the branch ```(git push origin feature/YourFeatureName)```.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE)
