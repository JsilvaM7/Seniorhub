// Test
const fs = require('fs');

global.window = {};
global.document = {
    getElementById: (id) => { return { innerHTML: '', appendChild: () => {}, style: {} }; },
    createElement: (tag) => { return { className: '', innerHTML: '' }; }
};
global.scrollTo = () => {};

eval(fs.readFileSync('c:/Users/Lenovo/OneDrive/Área de Trabalho/SeniorHub/recipes.js', 'utf8'));

let appJs = fs.readFileSync('c:/Users/Lenovo/OneDrive/Área de Trabalho/SeniorHub/app.js', 'utf8');
appJs = appJs.replace(/import .*/g, '');
eval(appJs);

window.handleBookClick('livro2');
try {
    loadRecipe(2);
    console.log("loadRecipe(2) executed successfully without throwing.");
} catch(e) {
    console.error("ERROR 2:", e);
}
