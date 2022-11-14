const {
    getRoles,
    getRole,
    updateRole,
    deleteRole,
    deleteAllRoles,
    insertRole
} = require('../services/roleService');

const getAll = async (req, res, next) => {
    try {
        const roles = await getRoles();
        res.status(200).json(roles);
    } catch (err) {
        next(err);
    }
};

const get = async (req, res, next) => {
    try {
        const role = await getRole(req.params);
        res.status(200).json(role);
    } catch (err) {
        next(err);
    }
};

const put = async (req, res, next) => {
    try {
        const role = await updateRole(req.params, req.body);
        res.status(200).json(role);
    } catch (err) {
        next(err);
    }
};

const post = async (req, res, next) => {
    try {
        const newRole = req.body;
        await insertRole(newRole);
        res.status(201).json(newRole);
    } catch (err) {
        next(err);
    }
};

const del = async (req, res, next) => {
    try {
        await deleteRole(req.params);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

const delAll = async (req, res, next) => {
    try {
        await deleteAllRoles();
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
    delAll,
    del
};
