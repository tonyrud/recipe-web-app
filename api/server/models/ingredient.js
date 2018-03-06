const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    title: { type: String },
    category: { type: String },
});

module.exports = mongoose.model('ingredient', IngredientSchema);
