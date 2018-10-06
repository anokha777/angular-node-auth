const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://anokhaMongoDBuserID:wZBw88V7Yx9uXgRX@cluster0-mijcm.mongodb.net/angular-node-auth?retryWrites=true", { useNewUrlParser: true })
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
  post.save().then((createdPost) => {
    console.log(post);
    res.status(201).json({
      message: 'Post added successfully',
      postId: createdPost._id
    });
  });

});

app.get('/api/posts', (req, res, next) => {
  Post.find().then((documents) => {
    res.status(200).json({
      message: 'post fetched successfully',
      posts: documents
    });
  });
});

app.delete('/api/posts/:id', (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(() => {
    res.status(200).json({
      message: 'Post deleted!'
    });
  });
});

module.exports = app;
