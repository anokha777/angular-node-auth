const express = require('express');

const app = express();

app.use('/api/post', (req, res, next) => {
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
