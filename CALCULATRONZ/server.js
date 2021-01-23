const btn = require('./buttons.js');
const summ = require('./summ.js');
const back = require('./back.js');
const mem = require('./memory.js');

const server = (req, res) => {
    if(req.method === 'GET') {
        switch(req.query.api) {
            case 'btn':
                res.end(btn.btn(req));
                break;
            case 'summ':
                res.end(summ.summ(req));
                break;
            case 'back':
                res.end(back.back(req));
                break;
            case 'rem':
                res.end(back.rem(req));
                break;

            //add memory functions

            case 'dis1':
                res.end(mem.dis1(req));
                break;
            case 'dis2':
                res.end(mem.dis2(req));
                break;
            default:
                res.statusCode = 404;
                res.end();
        }
    }
}

module.exports = server;
 
// const app = express();
 
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'build')));
 
// app.get('/ping', function (req, res) {
//     return res.send('pong');
// });

// app.get('/btn', function(req, res) {
//     res.send(btn.btn(req));
// });

// app.get('/summ', function(req, res) {
//     res.send(summ.summ(req));
// });

// app.get('/back', function(req, res) {
//     res.send(back.back(req));
// });

// app.get('/rem', function(req, res) {
//     res.send(back.rem(req));
// });

// app.get('/msf', function(req, res) {
//     res.send(mem.msf(req));
// });

// app.get('/mmf', function(req, res) {
//     res.send(mem.mmf(req));
// });

// app.get('/mpf', function(req, res) {
//     res.send(mem.mpf(req));
// });

// app.get('/mcf', function(req, res) {
//     res.send(mem.mcf(req));
// });

// app.get('/mrf', function(req, res) {
//     res.send(mem.mrf(req));
// });

// app.get('/dis1', function(req, res) {
//     res.send(mem.dis1(req));
// });

// app.get('/dis2', function(req, res) {
//     res.send(mem.dis2(req));
// });