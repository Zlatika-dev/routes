const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');


app.use(bodyParser.json())
// ImportRoutes
const postRoute = require('./routes/posts') 

app.use('/posts', postRoute);
// app.use('/user', userRoute)


//ROUTES
app.get('/', (req, res) => {
  res.send('We are dodiks')
})


// Connect to DB
console.log(process.env.DB_CONNECTION)
mongoose.connect(process.env.DB_CONNECTION,
  { useNewUrlParser: true }
 )
  .catch(err=>console.log(err))

app.listen(3000)