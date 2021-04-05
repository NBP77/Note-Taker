const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001; 


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "Develop/public")));

var notesInfo = [];


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'Develop/public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'Develop/public/notes.html')));
app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, 'Develop/db/db.json')));

// Post function
app.post('/api/notes', (req, res) => {
    try {
        notesInfo = fs.readFileSync('Develop/db/db.json', 'utf8');
        console.log(notesInfo);

        notesInfo = JSON.parse(notesInfo)
        req.body.id = notesInfo.length;

        notesInfo.push(req.body);

        notesInfo = JSON.stringify(notesInfo);
        fs.writeFile('Develop/db/db.json', notesInfo, 'utf8', (err) => {
            if (err) throw err;
        });

        res.json(JSON.parse(notesInfo));
         
    } catch (err) {
        throw err
    }
    
});
// Get Function 
app.get('/api/notes', (err, res) => {
    try {
     notesInfo = fs.readFileSync('./Develop/db/db.json', 'utf8');
     console.log("hello World");  
     
     notesInfo = JSON.parse(notesInfo);

    } catch (err) {
        console.log("Error");
      }
      res.json(notesData);
});


app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`)
);