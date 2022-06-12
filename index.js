const express = require("express");
const cors = require("cors");
const DBInitializer = require('./Initializers/DBInitializer');

const app = express();

//Importing the Cross Origin Resource Policy with default access
app.use(cors());

//Initializers
DBInitializer();
app.use(express.json());

//Importing Controllers
app.get('/',(req,res)=>{
    res.send("Backend working fine!");
});

//Starting the Server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening at port ${port}`));