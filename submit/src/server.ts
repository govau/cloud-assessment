import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');
import request = require('request');
import AWS = require('aws-sdk');
import { config } from "./config";


// Set the AWS 
AWS.config.update({
    accessKeyId: config.AWS.bucket.accessKeyId,
    secretAccessKey: config.AWS.bucket.secretAccessKey
});
// Create S3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

let app = express();
// enable cors
app.use(cors());
const port = process.env.PORT || 3000
// For POST-Support
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    limit: '1000kb'
}));

app.post('/submit', function(req, res) {
    if (isEmpty(req.body)) {
        return res.status(403).json({ "success": false, "message": "input invalid" });
    }

    // recaptcha verfication
    let captchaResponse = req.query.data;

    if (captchaResponse === undefined || captchaResponse === '' || captchaResponse === null) {
        return res.status(403).json({ "success": false, "message": "recaptcha invalid" });
    }

    const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + config.Google.reCaptcha_secretKey
        + "&response=" + captchaResponse + "&remoteip=" + req.connection.remoteAddress;

    request(verificationURL, function(error, response, body) {
        body = JSON.parse(body);

        if (body.success !== undefined && !body.success) {
            return res.status(403).json({ "success": false, "message": "Failed captcha verification" });
        }

        var uploadParams = { Bucket: config.AWS.bucket.name, Key: `DTA_Cloud_Assessment_${+Date.now()}`, Body: JSON.stringify(req.body) };
        // call S3 to retrieve upload file to specified bucket
        s3.upload(uploadParams, function(err, data) {
            if (err) {
                return res.status(403).json({ "success": false, "message": "report save failed" });
            }
            if (data) {
                return res.json({ "success": true, "message": "report saved" });
            }
            return res.status(403).json({ "success": false, "message": "report save error" });
        });
    });
});

app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }
    return console.log(`server is listening on ${port}`)
});

function isEmpty(objToCheck) {
    return Object.keys(objToCheck).length == 0;
}
