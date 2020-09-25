const express = require('express');
const path = require('path');

const parser = require('./NSPU/requestSchedule');

const btn = require('./CALCULATRONZ/buttons.js');
const summ = require('./CALCULATRONZ/summ.js');
const back = require('./CALCULATRONZ/back.js');
const mem = require('./CALCULATRONZ/memory.js');


const port = process.env.PORT || 8080;

const app = express();
 
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

// NSPU schedule
app.get('/nspu/schedule', function (req, res) {
    parser.parseHTML(req.query.id)
    .then(layout => parser.getLinesOfParsedValues(layout))
    .then(values => (parser.getObjectOfParsedValues(values)))
    .then(response => res.send({
        operated: true,
        data: response
    }))
    .catch(e => {
        res.send({
            operated: false
        });
    });
});

app.get('/nspu/download', function (req, res) {
    let file = "Schedule.apk";
    let fPath = path.join(__dirname, 'NSPU', file);
    res.download(fPath);
});

// Calculatronz
app.get('/calculatronz/btn', function(req, res) {
    res.send(btn.btn(req));
});

app.get('/calculatronz/summ', function(req, res) {
    res.send(summ.summ(req));
});

app.get('/calculatronz/back', function(req, res) {
    res.send(back.back(req));
});

app.get('/calculatronz/rem', function(req, res) {
    res.send(back.rem(req));
});

app.get('/calculatronz/msf', function(req, res) {
    res.send(mem.msf(req));
});

app.get('/calculatronz/mmf', function(req, res) {
    res.send(mem.mmf(req));
});

app.get('/calculatronz/mpf', function(req, res) {
    res.send(mem.mpf(req));
});

app.get('/calculatronz/mcf', function(req, res) {
    res.send(mem.mcf(req));
});

app.get('/calculatronz/mrf', function(req, res) {
    res.send(mem.mrf(req));
});

app.get('/calculatronz/dis1', function(req, res) {
    res.send(mem.dis1(req));
});

app.get('/calculatronz/dis2', function(req, res) {
    res.send(mem.dis2(req));
});

app.get('/calculatronz/', function(req, res) {
    res.sendFile(path.join(__dirname, 'CALCULATRONZ', 'build', 'index.html'));
});

// Beyend
app.get('/beyend/', function(req, res) {
    res.sendFile(path.join(__dirname, 'BEYEND', 'build', 'index.html'));
});
 
// CV
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);