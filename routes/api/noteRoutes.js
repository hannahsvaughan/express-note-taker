const noteRouter = require("express").Router()
const { randomUUID } = require("crypto");
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

noteRouter.get("/", (req, res) => {
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

app.post('/', (req,res) => {
    console.info(`${req.method} request received to add a note`);

    //Destructuring assignemtn for items in req.body
    const { title, text } = req.body;

    if(title && text) {
     //Variable for the object we will save   
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting note');
    }
    });
    
module.exports = noteRouter