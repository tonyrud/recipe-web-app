const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    title: { type: String },
    category: { type: String },
});

mongoose.model('ingredient', IngredientSchema);
