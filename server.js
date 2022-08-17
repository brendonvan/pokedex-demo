// Configuration
const express = require('express');
const app = express();
const PORT = 8080;

// Imports
const pokedexController = require('./controllers/pokedex_controller');

// Middleware 
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use('/pokedex', pokedexController);


// Listen
app.listen(PORT, () => {console.log(`Pokedex app listening at http://localhost:${PORT}`)});

module.exports = app;