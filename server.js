const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about-us', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about-us.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact-us.html'));
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
