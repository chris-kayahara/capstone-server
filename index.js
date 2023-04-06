// .env variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// require
const loginRoute = require('./routes/loginRoute')
const userRoute = require('./routes/userRoute');
const documentRoute = require('./routes/documentRoute');
const imageRoute = require('./routes/imageRoute');

 // enable serving static files from public folder
 app.use(express.static('public'));

// all routes
app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/document', documentRoute);
app.use('/image', imageRoute);

app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
  });