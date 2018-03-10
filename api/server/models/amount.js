const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AmountSchema = new Schema({
    amount: { type: String },
});

module.exports = mongoose.model('amount', AmountSchema);
