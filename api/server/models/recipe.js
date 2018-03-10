const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    title: { type: String },
    category: { type: String },
    created: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'author',
    },
    ingredients: [
        {
            ingredient: {
                type: Schema.Types.ObjectId,
                ref: 'ingredient',
            },
            amount: {
                type: Schema.Types.ObjectId,
                ref: 'amount',
            },
        },
    ],
    image: String,
});

// RecipeSchema.statics.addLyric = function(id, content) {
//     const Lyric = mongoose.model('lyric');

//     return this.findById(id).then(song => {
//         const lyric = new Lyric({ content, song });
//         song.lyrics.push(lyric);
//         return Promise.all([lyric.save(), song.save()]).then(
//             ([lyric, song]) => song,
//         );
//     });
// };

RecipeSchema.statics.findIngredients = function(id) {
    return this.findById(id)
        .populate('ingredients.ingredient')
        .then(recipe => {
            return recipe.ingredients.map(({ ingredient }) => ingredient);
        });
};
RecipeSchema.statics.findAmount = function(id) {
    return this.findById(id)
        .populate('ingredients')
        .then(recipe => {
            console.log('recipe: ', recipe);
        });
};

module.exports = mongoose.model('recipe', RecipeSchema);
