const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Layout and static files
app.use(expressLayouts);
app.set('layout', 'layout');
app.use(express.static(path.join(__dirname, 'public')));

// Load data
const sermons = require('./data/sermons.json');
const events = require('./data/events.json');

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        sermons,
        events,
        currentPage: 'home'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        currentPage: 'about'
    });
});

app.get('/sermons', (req, res) => {
    res.render('sermons', {
        sermons,
        currentPage: 'sermons'
    });
});

app.get('/events', (req, res) => {
    res.render('events', {
        events,
        currentPage: 'events'
    });
});

// ✅ Optional Pages (create corresponding .ejs files in /views)
app.get('/visit', (req, res) => {
    res.render('visit', {
        currentPage: 'visit'
    });
});

app.get('/connect', (req, res) => {
    res.render('connect', {
        currentPage: 'connect'
    });
});

app.get('/watch', (req, res) => {
    res.render('watch', {
        currentPage: 'watch'
    });
});

app.get('/give', (req, res) => {
    res.render('give', {
        currentPage: 'give'
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Church website running at http://localhost:3000');
});