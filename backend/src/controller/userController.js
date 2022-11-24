const {
    getUsers,
    getUser,
    updateUser,
    deleteAllUsers,
    deleteUser,
    insertUser
} = require('../services/userService');

const getAll = async (req, res, next) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};

const get = async (req, res, next) => {
    try {
        const user = await getUser(req.params);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

const put = async (req, res, next) => {
    try {
        const user = await updateUser(req.params, req.body);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

const patch = async (req, res, next) => {
    try {
        const user = await updateUser(req.params, req.body);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

const post = async (req, res, next) => {
    try {
        const newUser = req.body;
        await insertUser(newUser);
        res.status(201).json(newUser);
    } catch (err) {
        next(err);
    }
};

const del = async (req, res, next) => {
    try {
        await deleteUser(req.params);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

const delAll = async (req, res, next) => {
    try {
        await deleteAllUsers();
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAll,
    get,
    post,
    put,
    patch,
    delAll,
    del
};
