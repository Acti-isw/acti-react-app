const {
    getReactive,
    getReactives,
    getReactiveByTopic,
    insertReactive,
    updateReactive,
    deleteReactive,
    deleteAllReactive
} = require('../services/reactiveService');

const getAll = async (_, res, next) => {
    try {
        const reactives = await getReactives();
        res.status(200).json(reactives);
    } catch (err) {
        next(err);
    }
};

const get = async (req, res, next) => {
    try {
        const reactive = await getReactive(req.params);
        res.status(200).json(reactive);
    } catch (err) {
        next(err);
    }
};

const getByTopic = async (req, res, next) => {
    try {
        const reactive = await getReactiveByTopic(req.params);
        res.status(200).json(reactive);
    } catch (err) {
        next(err);
    }
};

const post = async (req, res, next) => {
    try {
        const newReactive = req.body;
        await insertReactive(newReactive);
        res.status(201).json(newReactive);
    } catch (err) {
        next(err);
    }
};

const put = async (req, res, next) => {
    try {
        await updateReactive(req.params, req.body);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

const del = async (req, res, next) => {
    try {
        await deleteReactive(req.params);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

const delAll = async (_, res, next) => {
    try {
        await deleteAllReactive();
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAll,
    get,
    getByTopic,
    post,
    put,
    del,
    delAll
};
