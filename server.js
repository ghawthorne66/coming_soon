const express = require('express')
const path = require('path');
const Mailchimp = require('mailchimp-api-v3');
require('dotenv').config({ path: _dirname + "/variables.env"});

const mc_api_key = process.env.MAILCHIMP_API_KEY

const app = express();

const mailchimp = new Mailchimp(mc_api_key);

//API endpoint
app.get("/api/memberAdd" , (req, res) => {
    mailchimp
    .post(`/lists/${list_id}/members/` , {
        email_address: req.query.email,
        status: "subscribed"
    })
})
