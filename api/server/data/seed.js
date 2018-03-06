const fs = require('fs');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/local');
mongoose.Promise = global.Promise;

const Recipe = require('./../models/recipe');
const Ingredient = require('./../models/ingredient');

const recipes = JSON.parse(
    fs.readFileSync(__dirname + '/recipes.json', 'utf-8'),
);
const ingredients = JSON.parse(
    fs.readFileSync(__dirname + '/ingredients.json', 'utf-8'),
);

async function deleteData() {
    console.log('😢😢 Goodbye Data...');
    await Recipe.remove();
    await Ingredient.remove();
    console.log(
        'Data Deleted. To load sample data, run\n\n\t npm run db:seed\n\n',
    );
    process.exit();
}

async function loadData() {
    try {
        await Recipe.insertMany(recipes);
        await Ingredient.insertMany(ingredients);
        console.log('👍👍👍👍👍👍👍👍 Done!');
        process.exit();
    } catch (e) {
        console.log(
            '\n👎👎👎👎👎👎👎👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run db:delete\n\n\n',
        );
        console.log(e);
        process.exit();
    }
}
if (process.argv.includes('--delete')) {
    deleteData();
} else {
    loadData();
}
