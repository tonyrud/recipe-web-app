const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    title: { type: String },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    ingredients: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ingredient',
        },
    ],
    image: { type: String },
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
        .populate('ingredients')
        .then(recipe => recipe.ingredients);
};

mongoose.model('recipe', RecipeSchema);
