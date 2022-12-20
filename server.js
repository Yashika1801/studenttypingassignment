import {addRecord} from './datastore';
const express = require('express');
const PORT = 5001;
var cors = require('cors');
const { default: addRecord } = require('./datastore');
const app = express();
const router = express.Router();
app.use(express.json());
app.use(cors())
router.post('start', (req,res) => {
    console.log({...req});
    req = {
            rollNumber: req.rollNumber,
            image:req.image
    }
    addRecord(req);
    
    res.status(201).json({
        message : "Sample Docker Redis Application"
    });
});
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});