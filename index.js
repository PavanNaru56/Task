
const express = require('express');
const cookieParser = require('cookie-parser');
const port = 8000;
const bodyParser = require('body-parser');
const app = express();

const expressLayouts = require('express-ejs-layouts');


const db = require('./config/mongoose');


app.use(express.static('./assets'));

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(expressLayouts);


app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));

app.listen(port,(err) => {
    if(err){
        console.log("error in connecting port")
        
    }
    console.log("port succesfully connected");
})




