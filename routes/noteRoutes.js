const router = require("express").Router()
// const { randomUUID } = require("crypto");
const express = require("express");
const fs = require("fs");
const app = require(".");


const readNotes = () => {
    console.log("reading notes!")
    fs.readFile("../db/db.json", (err, data) => {
        if (err) throw err
    })
};

const editNote = (updatedNotesArray) => {
    fs.writeFile("./db/db.json", JSON.stringify(updatedNotesArray), (err) => {
        if (err) {
            throw err
        } else {
            return updatedNotesArray;
        }
    });
};

router.get("/", (req, res) => {
    console.log("notes are being hit here!")
    const notes = readNotes()
    console.log(notes)
    res.json(notes)

});

// POST REQUEST - take request body so whatever the user enters

const addNote = (updatedNotesArray) => {
    fs.writeFile("./db/db.json", JSON.stringify(updatedNotesArray), (err) => {
        if (err) {
            throw err
        } else {
            return updatedNotesArray
        }
    });
};

//then in post request call the addNote function
// http://localhost:3001/notes/
router.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    const { title, text } = req.body;
    if (title && text) {
        //Variable for the object we will save   
        const newNote = {
            title,
            text,
        };

        //first step is to read whatever we have in the db.json file bc that is where we are storing the info that has been put in
        fs.readFile("db/db.json", (err, data) => {
            if (err) throw err;
            const allNotes = JSON.parse(data);
            allNotes.push(newNote);

            fs.writeFileSync("./db/db.json", JSON.stringify(allNotes, null, 4), (writeErr) => {
                writeErr
                ? console.error(writeErr)
                : console.log(`$newNote.title} has been added to JSON`)
            });
        });

        //if async issues then use .then
        //making a response object to see if note writing is even working 
        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting note');
    }
});


module.exports = router;