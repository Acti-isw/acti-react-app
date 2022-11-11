const user = require('../services/userService');

const getAll = async (req, res, next) => {
    try {
        const users = await user.getUsers();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};

const post = async (req, res, next) => {
    try {
        const newUser = req.body;
        await user.insertUser(newUser);
        res.status(201).json(newUser);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAll,
    post
};
