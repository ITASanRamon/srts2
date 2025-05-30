const express = require('express');
const path = require('path');
const app = express();
const serverless = require('serverless-http');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req, res) => {
    res.render('index');
});

module.exports.handler = serverless(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
