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
app.use(express.static('./dist/photo-client'));
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(bodyParser.json())
app.use(morgan("dev"));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './dist/photo-client/'}
  );
  });
app.use("/user", userRoutes);
//app.use("/upload", uploadRoutes);

app.listen()