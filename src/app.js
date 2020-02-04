const request = require('request');
const express = require('express');

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a72f08cee23345d3b196c3c0cf9a86ad');

const port = process.env.PORT || 3000;
const app = express();


// newsapi.v2.topHeadlines({
// //sources: 'bbc-news,the-washington-post,time,cnn,new-york-magazine,vice-news,abc-news,cbs-news,the-washington-times,the-verge',
//     q: 'madrid',
//     sortBy: 'relevancy',
//     language: 'en'
// }).then(response => {
//     console.log(response);
//     /*
//       {
//         status: "ok",
//         articles: [...]
//       }
//     */
// });

newsapi.v2.everything({
    q: 'coronavirus in india',
    sources:'bbc-news',
    language: 'en',
    sortBy: 'relevance',
    page: 1,
    pageSize:3
}).then(response => {
    console.log(response.articles);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
});


// //api-key : a72f08cee23345d3b196c3c0cf9a86ad

// //const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a72f08cee23345d3b196c3c0cf9a86ad";

//  const url = "https://newsapi.org/v2/everything?q=trump&apiKey=a72f08cee23345d3b196c3c0cf9a86ad";

// request({ url, json: true }, (error, {body}) => {
    
//     console.log(body);
     
// });

app.listen(port, () => {
    console.log('Server Live at Port 3000');
});