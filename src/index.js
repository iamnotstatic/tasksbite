const path = require('path');
const app = require('./app');

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    req.sendFile(
      path.resolve(__dirname, 'src', 'client', 'build', 'index.html')
    );
  });
}

const port = process.env.PORT;

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
