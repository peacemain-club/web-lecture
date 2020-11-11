const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/public/index.html');
});

app.use('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(3000);
