const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://anokhaMongoDBuserID:wZBw88V7Yx9uXgRX@cluster0-mijcm.mongodb.net/test?retryWrites=true")
.then(() => {
  console.log('Database Connection success');
}).catch((err) => {
  console.log('Database connection error = ', err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');

  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
      {id:'cgvhnmuiyuiouyudfu', title: 'First Post', content: 'this is the first post content'},
      {id:'rty89inhj89jioj89j', title: 'second Post', content: 'this is the second post content'},
      {id:'567878b785678uiklm', title: 'third Post', content: 'this is the third post content'},
    ];

  res.status(200).json({
    message: 'post fetched successfully',
    posts: posts
  });
});

module.exports = app;
