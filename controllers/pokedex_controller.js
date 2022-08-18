
// Imports
// import {pokemonNoExport} from '../public/scripts/pokedex_scroll.js';
// let pokemonNo = require('../public/scripts/pokedex_scroll'); // DOES NOT WORK >Document.querySelector()
// console.log(pokemonNoExport)

// Configuration
const express = require('express');
const router = express.Router();

// Middleware
router.use(express.urlencoded({ extended: true}));
const pokedexDatabase = require('../models/pokemon')

// Routers
router.get('/', (req, res) => {
    res.render('index.ejs', {pokemonDB: pokedexDatabase});
})

router.get('/new', (req, res) => {
    res.render('new.ejs', {pokemonDB: pokedexDatabase});
})

router.get('/0', (req, res) => {
    res.redirect('/pokedex/151');
})

router.get('/152', (req, res) => {
    res.redirect('/pokedex/1');
})

router.get('/:id', (req, res) => {
    const context = { pokemon: pokedexDatabase[req.params.id - 1]};
    res.render('show.ejs', context);
})

module.exports = router;