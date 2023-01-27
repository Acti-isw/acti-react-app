const resourceSchema = require('../models/resource');

const getResources = async () => {
    return await resourceSchema.find();
};

const getResourceById = async ({ id }) => {
    return await resourceSchema.find({ id: id });
};
const updateResource = async ({ id }, { titulo, enlace, color }) => {
    await resourceSchema.updateOne(
        {
            id: id
        },
        {
            $set: {
                titulo: titulo,
                enlace: enlace,
                color: color
            }
        }
    );
};
const deleteResource = async ({ id }) => {
    await resourceSchema.deleteOne({ id: id });
};

const insertResource = async (resource) => {
    const newResource = new resourceSchema(resource);
    await resourceSchema.insertMany(newResource);
};

// Dev only

const deleteAllResources = async () => {
    await resourceSchema.deleteMany({});
};

module.exports = {
    getResources,
    getResourceById,
    insertResource,
    updateResource,
    deleteResource,
    deleteAllResources
};
