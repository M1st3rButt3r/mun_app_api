const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

const calendarRoute = require("./routes/calendar")
const notificationsRoute = require("./routes/notifications");
const req = require('express/lib/request');

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.use("/calendar", calendarRoute);;
app.use("/notifications", notificationsRoute);

app.listen(3001, () => {
    console.log('listening on port 3001');
});
