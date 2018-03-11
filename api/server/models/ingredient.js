const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    title: { type: String },
    category: { type: String },
    amount: {
        type: Schema.Types.ObjectId,
        ref: 'amount',
    },
});

function autopopulate(next) {
    this.populate('amount');
    next();
}

IngredientSchema.pre('find', autopopulate);
IngredientSchema.pre('findOne', autopopulate);

module.exports = mongoose.model('ingredient', IngredientSchema);
