const {
    getBranches,
    getBranch,
    insertBranch,
    updateBranch,
    deleteBranch,
    deleteAllBranch
} = require('../services/branchService');

const getAll = async (_, res, next) => {
    try {
        const branches = await getBranches();
        res.status(200).json(branches);
    } catch (err) {
        next(err);
    }
};

const get = async (req, res, next) => {
    try {
        const branch = await getBranch(req.params);
        res.status(200).json(branch);
    } catch (err) {
        next(err);
    }
};

const post = async (req, res, next) => {
    try {
        const newBranch = req.body;
        await insertBranch(newBranch);
        res.status(201).json(newBranch);
    } catch (err) {
        next(err);
    }
};

const put = async (req, res, next) => {
    try {
        await updateBranch(req.params, req.body);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

const del = async (req, res, next) => {
    try {
        await deleteBranch(req.params);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

const delAll = async (_, res, next) => {
    try {
        await deleteAllBranch();
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
    del,
    delAll
};
