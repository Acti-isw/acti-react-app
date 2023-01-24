const recommendedSchema = require('../models/recommended');

const getRecommended = async () => {
    return await recommendedSchema.find();
};

const getRecommendedById = async ({ id }) => {
    return await recommendedSchema.find({ id: id });
};

const updateRecommended = async ({ id }, { titulo, enlace, color }) => {
    await recommendedSchema.updateOne(
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

const deleteRecommended = async ({ id }) => {
    await recommendedSchema.deleteOne({ id: id });
};

const insertRecommended = async (recommended) => {
    const newRecommended = new recommendedSchema(recommended);
    await recommendedSchema.insertMany(newRecommended);
};

// Dev only

const deleteAllRecommended = async () => {
    await recommendedSchema.deleteMany({});
};

module.exports = {
    getRecommended,
    getRecommendedById,
    insertRecommended,
    updateRecommended,
    deleteRecommended,
    deleteAllRecommended
};
