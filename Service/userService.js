const User = require('../Model/userModel')


exports.CreateUser = async (e) => {
    try {
        const user = new User({
            name: e.name,
            email: e.email
        });

        const result = await user.save();
        console.log(result);

    } catch (error) {
        console.log(error);
        throw error
    }
}