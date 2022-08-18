console.log('Scroll JS:loaded');
let pokemonNo;

let pokedexID = document.querySelector('.pokedex-id');
let pokedexImageContainer = document.querySelector('.pokedex-image-container');
let pokemonImage = document.querySelector('.pokemon-image');


pokedexImageContainer.addEventListener('scroll', () => {
    let currentPokedex = pokedexImageContainer.scrollTop / 330;
    if (currentPokedex % 1 > 0 && currentPokedex % 1 < 0.1) {
        pokemonNo = parseInt(currentPokedex.toFixed(.1))
        if (getLength(pokemonNo) === 1) {
            pokedexID.innerHTML = `No.00${pokemonNo}`;
        } else if (getLength(pokemonNo) === 2) {
            pokedexID.innerHTML = `No.0${pokemonNo}`;
        } else if (getLength(pokemonNo) === 3) {
            pokedexID.innerHTML = `No.${pokemonNo}`;
        } else {
            pokedexID.innerHTML = `No.---`;
        }
    }
})

function getLength(num) {
    return num.toString().length;
}

// export default pokemonNoExport = pokemonNo;
// module.exports = [pokemonNo];