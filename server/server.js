const express = require('express');
const PORT = 3333;
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/', (req, res) => {
  res.send('server works');
});

app.listen(PORT, () => console.log('Server running on %s', PORT));