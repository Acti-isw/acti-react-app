const {
    getChallenge,
    getChallenges,
    insertChallenge,
    updateChallenge,
    deleteChallenge,
    deleteAllChallenges
} = require('../services/challengeService');

const getAll = async (_, res, next) => {
    try {
        const challenges = await getChallenges();
        res.status(200).json(challenges);
    } catch (err) {
        next(err);
    }
};

const get = async (req, res, next) => {
    try {
        const challenge = await getChallenge(req.params);
        res.status(200).json(challenge);
    } catch (err) {
        next(err);
    }
};

const post = async (req, res, next) => {
    try {
        const newChallenge = req.body;
        await insertChallenge(newChallenge);
        res.status(201).json(newChallenge);
    } catch (err) {
        next(err);
    }
};

const put = async (req, res, next) => {
    try {
        const newChallenge = req.body;
        await updateChallenge(req.params, newChallenge);
        res.status(201).json(newChallenge);
    } catch (err) {
        next(err);
    }
};

const del = async (req, res, next) => {
    try {
        await deleteChallenge(req.params);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

const delAll = async (_, res, next) => {
    try {
        await deleteAllChallenges();
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
