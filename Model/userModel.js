
const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    user_id: { type: Number, required: true },
    name: String,
    email: String,
    is_Delete: { type: Boolean, default: false }
});

module.exports = mongoose.model('user', userSchema)




