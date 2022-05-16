const express = require('express');
const router = express.Router();
const database = require('../database')
const push = require('web-push');
require('dotenv').config();

router.post("/register", async (req, res) => {
    const [resp, err] = await database.addSubscription(req.body.subscription);
    if(err) {
        res.sendStatus(500)
        return;
    }
    res.sendStatus(201)
})

router.post("/", async (req, res) => {  
    push.setVapidDetails('http://localhost:3000', process.env.VAPID_PUBLIC_KEY, process.env.VAPID_PRIVATE_KEY)
    const [rows, fields] = await database.getSubscriptions();
    const nonExistent = []
    rows.forEach(element => {
        const sub = {}
        sub.endpoint = element.endpoint
        sub.keys = {}
        sub.keys.p256dh = element.p256dh
        sub.keys.auth = element.auth
        push.sendNotification(sub, req.body.notification).catch(err => {
            nonExistent.push(element.id)
        })
    });
    res.sendStatus(201)
    setTimeout(() => database.deleteNotExistingSubscriptions(nonExistent), 1000);
})

module.exports = router;