const resourceSchema = require('../models/resource');

const getResources = async () => {
    return await resourceSchema.aggregate([
        {
            $lookup: {
                from: 'topics',
                localField: 'topic',
                foreignField: 'id',
                as: 'topic'
            }
        },
        {
            $unwind: '$topic'
        }
    ]);
};

const getResourceById = async ({ id }) => {
    return await resourceSchema.aggregate([
        {
            $match: {
                id: id
            }
        },
        {
            $lookup: {
                from: 'topics',
                localField: 'topic',
                foreignField: 'id',
                as: 'topic'
            }
        },
        {
            $unwind: '$topic'
        }
    ]);
};

const updateResource = async ({ id }, { titulo, tipo, tema, enlace }) => {
    await resourceSchema.updateOne(
        {
            id: id
        },
        {
            $set: {
                titulo: titulo,
                tipo: tipo,
                tema: tema,
                enlace: enlace
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
