const announcementSchema = require('../models/announcement');

const getAnnonucement = async () => {
    return await announcementSchema.find();
};

const deleteAnnouncement = async ({ id }) => {
    return await announcementSchema.deleteOne({ id: id });
};

const deleteAllAnnouncements = async () => {
    return await announcementSchema.deleteMany();
};

const insertAnnouncement = async (announcement) => {
    const newAnnouncement = new announcementSchema(announcement);
    await announcementSchema.insertMany(newAnnouncement);
};

module.exports = {
    getAnnonucement,
    deleteAnnouncement,
    deleteAllAnnouncements,
    insertAnnouncement
};
