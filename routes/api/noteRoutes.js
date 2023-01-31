const noteRouter = require("express").Router()
const express = require("express");
const fs = require("fs")

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


module.exports = noteRouter