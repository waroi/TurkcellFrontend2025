Game Collection Application
This project is a web application designed to manage a collection of games. Users can view, filter, sort, search, add, delete, and update games. The data is stored in JSON Server, and the application is styled with Bootstrap.

Features
Game Listing: Fetches game data from JSON Server and displays it to the user.
Filtering: Filters games by category and release date.
Sorting: Sorts games alphabetically (A-Z, Z-A) or by release date.
Search: Search games by name, category, or developer.
Add Game: Users can add new games to the collection.
Delete Game: Users can delete existing games from the collection.
Update Game: Users can update game details.
Dark Mode: The app includes a dark mode feature.
Technologies
HTML/CSS: Used for the structure and visual design of the app.
JavaScript (ES6): Provides dynamic functionality for the application.
Bootstrap: Used for a responsive and sleek UI design.
JSON Server: Acts as a mock backend to store game data.


Setup
To run the project, you need to first set up JSON Server. Follow the steps below to install and run the project.

1. Install JSON Server
Install JSON Server globally:


npm install -g json-server
2. Create the Database File
In the project root directory, create a file named db.json and add the following data:

json

{
  "games": [
    {
      "id": 1,
      "name": "Game 1",
      "description": "Description of Game 1",
      "category": "Action",
      "release_date": "2021-01-01",
      "image": "game1.jpg",
      "developer": "Developer 1",
      "steam_url": "https://example.com"
    },
    {
      "id": 2,
      "name": "Game 2",
      "description": "Description of Game 2",
      "category": "Adventure",
      "release_date": "2022-05-12",
      "image": "game2.jpg",
      "developer": "Developer 2",
      "steam_url": "https://example.com"
    }
  ]
}
3. Start JSON Server
Start JSON Server by running the following command:


json-server --watch db.json --port 3000
4. Run the Application
In the project directory, open your terminal and run the following commands to start the application.
