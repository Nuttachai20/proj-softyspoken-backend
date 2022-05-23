const mongoose = require("mongoose")


const userSchema = new mongoose.Schema(
    {
        user_id: {
            type: Number, required: true, unique: true, min: 1
        },
        name: String,
        email: String,
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date },
        is_Delete: { type: Boolean, default: false }
    },
    { collection: 'user' }
);

userSchema.index({ slug: 1, user_id: 1 }, { unique: true })

module.exports = mongoose.model('User', userSchema)





