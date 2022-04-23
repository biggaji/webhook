const { EventEmitter } = require("events");
const axios = require("axios");

const event = new EventEmitter();

// create account event
event.on('account.created', (payload) => {
    // return new Promise((resolve,reject) => {
        let { webhookEndpoint } = payload.data; 
        //send pay load via axios
        axios.post(`${webhookEndpoint}`, {
            params: payload,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => {
            console.log(`Webhook sent to url`, webhookEndpoint);
            console.log(resp.data);
        })
        .catch(err => {
            console.log(err)
        });
    // });
});

// update account event
event.on('account.updated', (payload) => {
    // return new Promise((resolve,reject) => {
        let { webhookEndpoint } = payload.data; 
        //send pay load via axios
        axios.post(`${webhookEndpoint}`, {
            params: payload,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => {
            console.log(`Webhook sent to url`, webhookEndpoint);
            console.log(resp.data);
        })
        .catch(err => {
            console.log(err)
        });
    // });
});

module.exports = event;