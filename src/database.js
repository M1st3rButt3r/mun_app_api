const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mun_app_api'
}).promise()

async function addSubscription(json) {
    return await connection.execute("INSERT IGNORE INTO subscriptions (endpoint, p256dh, auth) VALUES (?, ?,  ?)", [json.endpoint, json.keys.p256dh, json.keys.auth]);
}

async function getSubscriptions() {
    return await connection.execute("SELECT * FROM subscriptions")
}

async function deleteNotExistingSubscriptions(ids) {
    console.log(ids)
    return await connection.execute("DELETE FROM subscriptions WHERE id IN (?)", [ids]);
}

module.exports = { addSubscription, getSubscriptions, deleteNotExistingSubscriptions };