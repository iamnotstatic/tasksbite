const express = require('express');
const path = require('path');
const app = require('./src/app');

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const port = process.env.PORT;

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
