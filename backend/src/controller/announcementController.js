const {
    getAnnonucement,
    deleteAnnouncement,
    deleteAllAnnouncements,
    insertAnnouncement
} = require('../services/announcementService');

const getAll = async (_, res, next) => {
    try {
        const announcements = await getAnnonucement();
        res.status(200).json(announcements);
    } catch (err) {
        next(err);
    }
};

const post = async (req, res, next) => {
    try {
        const newAnnouncement = req.body;
        await insertAnnouncement(newAnnouncement);
        res.status(201).json(newAnnouncement);
    } catch (err) {
        next(err);
    }
};

const del = async (req, res, next) => {
    try {
        await deleteAnnouncement(req.params);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

const delAll = async (_, res, next) => {
    try {
        await deleteAllAnnouncements();
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAll,
    post,
    del,
    delAll
};
