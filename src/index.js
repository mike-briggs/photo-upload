const express = require("express");

const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./account/userRoute"); //bring in our user routes

const app = express();

require("./config/db")(app);
app.use(cors());
app.options('*',cors())
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(bodyParser.json())
app.use(morgan("dev"));

app.get("/",(reg,res)=>{
    console.log("First Route");
})
app.use("/user", userRoutes);
//app.use("/upload", uploadRoutes);

app.listen(() => {
    console.log(`App is travelling on Port ${PORT}`)
})