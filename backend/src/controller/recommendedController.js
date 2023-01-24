const {
    getRecommended,
    getRecommendedById,
    insertRecommended,
    updateRecommended,
    deleteRecommended,
    deleteAllRecommended
} = require('../services/recommendedService');

const getAll = async (__, res) => {
    try {
        const recommended = await getRecommended();
        res.status(200).json(recommended);
    } catch (err) {
        next(err);
    }
};

const get = async (req, res) => {
    try {
        const recommended = await getRecommendedById(req.params);
        res.status(200).json(recommended);
    } catch (err) {
        next(err);
    }
};

const put = async (req, res) => {
    try {
        const recommended = await updateRecommended(req.params, req.body);
        res.status(200).json(recommended);
    } catch (err) {
        next(err);
    }
};

const post = async (req, res) => {
    try {
        const newRecommended = req.body;
        await insertRecommended(newRecommended);
        res.status(201).json(newRecommended);
    } catch (err) {
        next(err);
    }
};

const del = async (req, res) => {
    try {
        await deleteRecommended(req.params);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

const delAll = async (__, res) => {
    try {
        await deleteAllRecommended();
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAll,
    get,
    put,
    post,
    del,
    delAll
};
