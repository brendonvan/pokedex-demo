
// Imports
// import {pokemonNoExport} from '../public/scripts/pokedex_scroll.js';
// let pokemonNo = require('../public/scripts/pokedex_scroll'); // DOES NOT WORK >Document.querySelector()
// console.log(pokemonNoExport)

// Configuration
const express = require('express');
const router = express.Router();
let pushed = 0;

// Middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true}));
const pokedexDatabase = require('../models/pokemon')

// Routers
router.get('/', (req, res) => {
    res.render('index.ejs', {pokemonDB: pokedexDatabase});
})

router.get('/new', (req, res) => {
    res.render('new.ejs', {pokemonDB: pokedexDatabase});
})

router.get(`/${pokedexDatabase.length + 1}`, (req, res) => {
    res.redirect('/pokedex/1');
})

router.get('/0', (req, res) => {
    res.redirect(`/pokedex/${pokedexDatabase.length}`);
})

router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs', {pokemon: pokedexDatabase[parseInt(req.params.id)]});
})

router.delete('/:pokemonID', (req, res) => {
    
    pokedexDatabase.forEach((pokemon, idx) => {
        if(parseInt(pokemon.id) == req.params.pokemonID) {
            pokedexDatabase.splice( idx, 1);
        }
    })
    return res.redirect('/pokedex');
});

router.get('/:id', (req, res) => {
    const context = { pokemon: pokedexDatabase[req.params.id - 1]};
    res.render('show.ejs', context);
})

router.put('/:id', (req, res) => {
    let pokemonID = parseInt(req.params.id) - 1;
    pokedexDatabase[pokemonID] = req.body;
    res.redirect(`/pokedex/${pokemonID}`);
    console.log(pokedexDatabase[pokemonID]);
})

router.post('/', (req, res) => {
    pokedexDatabase.push({
        id: pokedexDatabase.length,
        name: req.body.name,
        img: req.body.img,
        type: [req.body.type],
        stats: {
            hp: req.body.statshp,
            attack: req.body.statsattack,
            defense: req.body.statsdefense,
            spattack: req.body.statsspattack,
            spdefense: req.body.statsspdefense,
            speed: req.body.speed,
        },
        moves: {},
        damages: {},
        misc: {
            sex: {
                male: req.body.miscsexmale,
                female: req.body.miscsexfemale
            },
            abilities: {
                normal: req.body.miscabilitiesnormal,
                hidden: req.body.miscabilitieshidden
            },
            classification: req.body.miscclassification,
            height: req.body.mischeight,
            weight: req.body.miscweight,
            capturerate: req.body.misccapturerate,
            eggsteps: req.body.misceggsteps,
            expgrowth: req.body.miscexpgrowth,
            happiness: req.body.mischappiness,
            evpoints: req.body.miscevpoints, 
            fleeflag: req.body.miscfleeflag, 
            entreeforestlevel: req.body.miscentreeforestlevel
        }
    });
    pushed++;
    // console.log(pokedexDatabase.length);
    // console.log(pokedexDatabase[pokedexDatabase.length - 1]);
    res.redirect('/pokedex');
})


module.exports = router;