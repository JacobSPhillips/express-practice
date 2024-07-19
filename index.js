const express = require('express')
const app = express();
const path = require('path');
const data = require('./about.json')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about/:people', (req, res) => {
    // const { people } = req.params;
    const { people } = req.params;
    const person = data[people];
    if (person) {
        res.render('about', { ...person })
    } else res.render('error')
})

app.listen(3000, () => {
    console.log('LISTENING ON 3000')
})