'use strict';

const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // 200 status code means OK
    res.status().send(200);
})

var http = require('http');

// Create a server object
http.createServer(function(req, res) {

    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url = req.url;

    if (url === '/database.json') {
        console.log("reading again");
        const jsonData = require('./database.json');
        console.log(jsonData);
        res.write(' data loaded');
        res.end();

    } else if (url === '/about') {
        console.log("welcome to Loan and Finance Services ");
        res.write(' Welcome to Loan And Finance Services');
        res.end();
    } else {
        res.writeHead(200);
        res.write('Successfully loaded!!!');
        res.end();

    }
}).listen(8081, function() {

    // The server object listens on port 3000
    console.log("server start at port 8081");
});

/*
let rawdata = fs.readFileSync('database.json');
let mechanic = JSON.parse(rawdata);
console.log(raoster); 
*/

let roaster = {
    "roaster":[
        {"customer_id":201102,"customer_name":"Priya" ,"customer_phnno":"9808766540" ,"customer_address":"bangalore", "customer_pincode":25001},
        {"customer_id":201103,"customer_name":"Shikha" ,"customer_phnno":"980887864" ,"customer_address":"husore", "customer_pincode":250091},
        {"customer_id":201106,"customer_name":"Divya" ,"customer_phnno":"9808987675" ,"customer_address":"punjab", "customer_pincode":250010},
        {"customer_id":201105,"customer_name":"Sunny" ,"customer_phnno":"9808534334" ,"customer_address":"meerut", "customer_pincode":250017},
        {"customer_id":201109,"customer_name":"Shiv" ,"customer_phnno":"9805676888" ,"customer_address":"aligarh", "customer_pincode":250015},
        {"customer_id":201110,"customer_name":"Satyam" ,"customer_phnno":"9808787798" ,"customer_address":"hyderabad", "customer_pincode":25081},
        {"customer_id":201111,"customer_name":"Pooja" ,"customer_phnno":"9857889988" ,"customer_address":"bangalore", "customer_pincode":25001},
        {"customer_id":201108,"customer_name":"Sandy" ,"customer_phnno":"9346768788" ,"customer_address":"jhasi", "customer_pincode":25091}
    ]};


let data = JSON.stringify(roaster);

fs.writeFile('./roaster.json', data, (err) => {
    console.log('WRITTING...');
    if (err) throw err;
    console.log('Data written to file');
});



fs.readFile('./roaster.json', (err, data) => {
    console.log('READING...');
    if (err) throw err;
    let roaster = JSON.parse(data);
    console.log(roaster);

});