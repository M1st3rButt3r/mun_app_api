// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the Express app
const app = express();


// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.setHeader('content-type', 'application/json');
  res.json([
    {
      "title": "Wednesday, 21st May",
      "events": [
        {
          "title": "Opening",
          "time": "2.00pm-5.00pm",
          "location": "Mozartsäle",
          "unixstart": "0",
          "unixend": "1"
        }
      ]
    },
    {
      "title": "Thurday, 22nd May",
      "events": [
        {
          "title": "Testing",
          "time": "2.00pm-5.00pm",
          "location": "Mozartsäle",
          "unixstart": "1",
          "unixend": "2"
        },
        {
          "title": "Opening",
          "time": "2.00pm-5.00pm",
          "location": "Mozartsäle",
          "unixstart": "3",
          "unixend": "4"
        },
        {
          "title": "SWOpening",
          "time": "2.00pm-5.00pm",
          "location": "Mozartsäle",
          "unixstart": "56",
          "unixend": "57"
        },
        {
          "title": "Opening",
          "time": "2.00pm-5.00pm",
          "location": "Mozartsäle",
          "unixstart": "100",
          "unixend": "200"
        }
      ]
    }
  ]);
});

app.get('/lastupdate', (req, res) => {
  res.setHeader('content-type', 'text/plain');
  res.send('315532800003');
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});
