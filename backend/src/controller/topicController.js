const {
    deleteTopic,
    deleteAllTopics,
    insertTopic,
    getTopic,
    updateTopic,
    getTopics
} = require('../services/topicService');

const getAll = async (_, res, next) => {
    try {
        const topics = await getTopics();
        res.status(200).json(topics);
    } catch (err) {
        next(err);
    }
};

const get = async (req, res, next) => {
    try {
        const topic = await getTopic(req.params);
        res.status(200).json(topic);
    } catch (err) {
        next(err);
    }
};

const post = async (req, res, next) => {
    try {
        const newTopic = req.body;
        await insertTopic(newTopic);
        res.status(201).json(newTopic);
    } catch (err) {
        next(err);
    }
};

const put = async (req, res, next) => {
    try {
        const newTopic = req.body;
        await updateTopic(req.params, newTopic);
        res.status(201).json(newTopic);
    } catch (err) {
        next(err);
    }
};

const del = async (req, res, next) => {
    try {
        await deleteTopic(req.params);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

const delAll = async (_, res, next) => {
    try {
        await deleteAllTopics();
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
