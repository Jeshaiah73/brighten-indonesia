const express = require('express');
const app = express();
app.get('/test', (req, res) => {
  res.send('Test successful!');
});
app.listen(3000, () => console.log('Test server running on port 3000'));