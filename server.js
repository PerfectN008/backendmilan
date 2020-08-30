const express = require('express');
const app = express();
const cors = require('cors');
const mongoose =require('mongoose');
const dotenv = require('dotenv');
const cookieparser = require('cookie-parser');
const bodyParser = require('body-parser');
const User=require("./model/user");


//ENV-CONFIGURATION
dotenv.config();
const port = process.env.PORT || 5000;


//MONGODB CONNECTION
const uri = process.env.ATLAS_USER
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})





//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(cookieparser());


//ROUTES
const authRoute = require('./routes/auth');
app.use('/user',authRoute);

const companyRoute = require('./routes/company');
app.use('/company',companyRoute);

const LnTRoute = require('./routes/LnT');
app.use('/lnt',LnTRoute);

const RelianceRoute = require('./routes/Reliance');
app.use('/reliance',RelianceRoute);

const SonyRoute = require('./routes/Sony');
app.use('/sony',SonyRoute);

const TataRoute = require('./routes/Tata');
app.use('/tata',TataRoute);




//PORT CONNECTION
app.listen( port, ()=> console.log(`Server is connected in port ${port}`))

