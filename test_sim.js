const fs = require('fs');

// Mock window and document
global.window = {};
global.document = {
    getElementById: (id) => { return { innerHTML: '', appendChild: () => {}, style: {} }; },
    createElement: (tag) => { return { className: '', innerHTML: '' }; }
};
global.scrollTo = () => {};

// Load recipes.js
eval(fs.readFileSync('recipes.js', 'utf8'));

// Load app.js (mocking module stuff if needed)
let appJs = fs.readFileSync('app.js', 'utf8');
// remove import statements if any
appJs = appJs.replace(/import .*/g, '');
eval(appJs);

console.log('Livro2 recipes length:', window.biblioteca.livro2.length);

// simulate what handleBookClick does
window.handleBookClick('livro2');

// simulate what handleRecipeClick(2) does
try {
    window.handleRecipeClick(2);
    console.log('Successfully called handleRecipeClick(2)');
} catch(e) {
    console.error('ERROR in handleRecipeClick(2):', e);
}
