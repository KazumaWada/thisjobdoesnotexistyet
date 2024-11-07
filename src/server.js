//chrome://inspect/
// const cron = require('node-cron');
// const cors = require('cors');
// const { devNull } = require('os');
// const dotenv = require('dotenv').config;//for proccess.env
// //for files every scrape data will store.
// const fs = require('fs');

// const readline = require('readline');
//const JSONStream = require('JSONStream');
//const aboutRouter = require('./about/about');

const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../')));
app.use('/jobs', express.static(path.join(__dirname, 'jobs')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
});
app.get('/json', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/job-describe.json'))
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});