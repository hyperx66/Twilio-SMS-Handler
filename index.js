var express = require('express')
var app = express()
var customerName, customerNumber, className;

app.get('/', function(req, res) {
    const accountSid = '<insert sid here>';
    const authToken = '<insert auth token here>';
    const client = require('twilio')(accountSid, authToken);

    var msgText = req.query("customerName") + " has expressed her interest to sign up for " + req.query("className") + ". Please contact the customer at " + req.query("customerNumber") + " for further clarification";
    client.messages
        .create({
            body: msgText,
            from: 'FSHNMKSPCE',
            messagingServiceSid: '',
            to: '<recipient number with country code>'
        })
        .then(message => console.log(message.sid))
        .done();
});
