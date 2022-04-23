if(process.env.NODE_ENV !== "production") {
    require("dotenv").config();
};

const express = require("express");
const event = require('./webhook');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:false }))

app.post('/create_account', (req,res) => {
    // console.log(`User created`, req.body);
    let payload = {
        data: req.body,
        event: 'account.created',
        created_at: Date.now()
    };

    event.emit('account.created', payload);
    res.status(201).send('Account created');
});

app.put('/update_account', (req,res) => {
    let payload = {
        data: req.body,
        event: 'account.updated',
        updated_at: Date.now()
    };

    event.emit('account.updated', payload);
    res.status(201).send(`Your username was updated to "${req.body.username}"`);
});

app.listen(3000, () => {
    console.log('Server running on 4242');
});