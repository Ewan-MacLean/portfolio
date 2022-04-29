const express = require('express');
const path = require('path');
// const ejsMate = require('ejs-mate');


const app = express();

app.engine('ejs')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home')
});

const port = process.env.PORT || 4444;
app.listen(4444, () => {
    console.log(`Serving on port 4444`)
})