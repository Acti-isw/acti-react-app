const recommendedSchema = require('../models/recommended');

const getRecommended = async () => {
    return await recommendedSchema.find();
};

const getRecommendedById = async ({ id }) => {
    return await recommendedSchema.find({ _id: id });
};

const updateRecommended = async ({ id }, recommended) => {
    await recommendedSchema.findOneAndUpdate({ _id: id }, recommended);
};


const deleteRecommended = async ({ id }) => {
    await recommendedSchema.deleteOne({ _id: id });
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
