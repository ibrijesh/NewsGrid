const request = require('request');
const express = require('express');

const path = require("path");
const hbs = require("hbs");

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a72f08cee23345d3b196c3c0cf9a86ad');

const port = process.env.PORT || 3000;
const app = express();


//path for Public and Views and Partial Directory//
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup Handler and View Location//
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Static Directory to be serve// 
app.use("", express.static(publicDirectoryPath));
//Root router  will execute it defaultly//


app.get('/', (req, res) => {
  res.render('index2', {
    title: 'News Grid'
  });
});


app.get('/search', (req, res) => {

  newsapi.v2.everything({
    q: req.query.key,
    language: 'en',
    sortBy: 'relevancy',
    page: 5,
    pageSize: 20
  }).then(response => {
    //console.log(response.articles);
    console.log(response.status);
    
    res.send({
    response
    });
  });

  
});




app.listen(port, () => {
    console.log('Server Live at Port 3000');
});