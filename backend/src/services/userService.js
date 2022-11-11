const userSchema = require('../models/user');

const getUsers = async () => {
    return await userSchema.find();
};

const insertUser = async (value) => {
    const user = new userSchema(value);
    await userSchema.insertMany(user);
};

module.exports = {
    getUsers,
    insertUser
};
