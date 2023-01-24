const {
    getResource,
    getResourceById,
    createResource,
    updateResource,
    deleteResource,
    deleteAllResources
} = require('../services/resourceService');

const getAll = async (__, res) => {
    try {
        const resources = await getResource();
        res.status(200).json(resources);
    } catch (err) {
        next(err);
    }
};

const get = async (req, res) => {
    try {
        const resource = await getResourceById(req.params);
        res.status(200).json(resource);
    } catch (err) {
        next(err);
    }
};

const put = async (req, res) => {
    try {
        const resource = await updateResource(req.params, req.body);
        res.status(200).json(resource);
    } catch (err) {
        next(err);
    }
};

const post = async (req, res) => {
    try {
        const newResource = req.body;
        await createResource(newResource);
        res.status(201).json(newResource);
    } catch (err) {
        next(err);
    }
};

const del = async (req, res) => {
    try {
        await deleteResource(req.params);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

const delAll = async (__, res) => {
    try {
        await deleteAllResources();
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
