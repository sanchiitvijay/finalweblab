const express = require('express');
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;
app.use(bodyParser.json());
let db;
const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/student_records';
MongoClient.connect(mongoUrl, function(err, database) {
    if(err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to student_records database');
        db = database;        
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
});
app.post('/students', (req, res) => {
    const { USN, Name, Subject_code, CIE } = req.body;   
    var collection = db.collection('students');
    collection.insert({USN: USN, Name: Name, Subject_code: Subject_code, CIE: CIE}, function(err, docs) {
        if(err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Student record added' });
        }
    });
});
app.get('/students/low-cie', (req, res) => {
    var collection = db.collection('students');
    collection.find({ CIE: { $lt: 20 } }).toArray(function(err, results) {
        if(err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
});
