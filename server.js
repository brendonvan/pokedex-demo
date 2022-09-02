// Configuration
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Imports
const pokedexController = require('./controllers/pokedex_controller');
const methodOverride = require('method-override');

// Middleware 
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use('/pokedex', pokedexController);

app.get('/', (req, res) => {
    res.redirect('/pokedex');
})

// Listen
app.listen(PORT, () => {console.log(`Pokedex app listening at http://localhost:${PORT}`)});

module.exports = app;

