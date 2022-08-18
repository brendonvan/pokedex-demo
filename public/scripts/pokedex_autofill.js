console.log('Autofill JS:loaded');

let pokedexAutofillButton = document.querySelector('.description-autofill');
let allDescriptionInput = document.querySelectorAll('.description-input')

pokedexAutofillButton.addEventListener('click', () => {
    allDescriptionInput.forEach((textField) => {
        textField.defaultValue = 'N/A';
        textField.placeholder = 'N/A';
    })
})
