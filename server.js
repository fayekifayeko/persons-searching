import express from 'express';
import routes from './routes/api';
import mongoose from 'mongoose';

const bodyParser = require('body-parser')

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/personsdb', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

// path for static files(imagws, css, html)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use('/api', routes);
// error handling middleware
app.use(function(err, req, res, next) {
  res.status(459).send({
    error: err.message
  });
});

// listen for requests
app.listen(process.env.port || 3000, function() {
    console.log('Server listening for requests now on port: ', process.env.port || 3000);
})