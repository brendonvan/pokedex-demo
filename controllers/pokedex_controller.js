
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
    res.redirect(`/pokedex/${pokedexDatabase.length}`);
})

router.get(`/${pokedexDatabase.length + 1}`, (req, res) => {
    res.redirect('/pokedex/1');
})

router.get('/:id', (req, res) => {
    const context = { pokemon: pokedexDatabase[req.params.id - 1]};
    res.render('show.ejs', context);
})

router.post('/', (req, res) => {
    console.log(pokedexDatabase.length + 1);
    pokedexDatabase.push({
        id: pokedexDatabase.length + 1,
        name: req.body.name,
        img: req.body.img,
        stats: {
            hp: req.body.statshp
        },
    });
    // console.log(pokedexDatabase.length);
    // console.log(pokedexDatabase[pokedexDatabase.length - 1]);
    res.redirect('/pokedex');
})


module.exports = router;