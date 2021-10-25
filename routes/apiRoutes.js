const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const uuid = require('uuid');
const notes = require('../db/db.json');


module.exports = function (app) {

    router.get("/api/notes/", function(req, res) {
        const results = notes;
        res.send(results);
    })

    router.post('/api/notes/', function(req, res) {
        console.log(JSON.stringify(req.body));
        const results = notes;
        res.json('added notes');
});
        

function createNotes(body, notes) {
        const addNotes = body;
        notes.push(addNotes);
        fs.writeFileSync(
            path.join(__dirname, './db/db.json'),
            JSON.stringify({ addNotes }, null, 2)
            );
            return addNotes;
        };
    
};