const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000; 
// process.env.PORT || 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

// app.get('/api/characters', (req, res) => res.json(characters));

// // Displays a single character, or returns false
// app.get('/api/characters/:character', (req, res) => {
//   const chosen = req.params.character;

//   console.log(chosen);

//   /* Check each character routeName and see if the same as "chosen"
//    If the statement is true, send the character back as JSON,
//    otherwise send the boolean value false as JSON */

//   for (let i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// // Create New Characters - takes in JSON input
// app.post('/api/characters', (req, res) => {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   const newcharacter = req.body;

//   console.log(newcharacter);

//   // We then add the json the user sent to the character array
//   characters.push(newcharacter);

//   // We then display the JSON to the users
//   res.json(newcharacter);
// });

// Starts the server to begin listening

app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`)
);