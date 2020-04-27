var express = require('express')
var app = express()
var customerName, customerNumber, className;

app.get('/', function(req, res) {
    const accountSid = 'AC868944d86bfe426798bdc2864a9dd312';
    const authToken = '849ad6b5da8224b0a3ec9b71e46ddf01';
    const client = require('twilio')(accountSid, authToken);

    var msgText = req.query("customerName") + " has expressed her interest to sign up for " + req.query("className") + ". Please contact the customer at " + req.query("customerNumber") + " for further clarification";
    client.messages
        .create({
            body: msgText,
            from: 'FSHNMKSPCE',
            messagingServiceSid: 'MGdf8d0797cd98efd3788e42be11b766da',
            to: '+6582920921'
        })
        .then(message => console.log(message.sid))
        .done();
});