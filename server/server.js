const express = require('express');
const PORT = 3333;
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/api/test', (req, res) => {
  res.json({
    message: 'Hi from the backend!'
  });
});

app.listen(PORT, () => console.log('Server running on %s', PORT));