const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
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
  
router.get('/lastupdate', (req, res) => {
    res.setHeader('content-type', 'text/plain');
    res.send('315532800003');
});

module.exports = router;