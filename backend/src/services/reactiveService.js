const { default: mongoose } = require('mongoose');
const reactiveSchema = require('../models/reactive');

const getReactive = async ({ id }) => {
    let result = await reactiveSchema.aggregate([
        {
            $match: {
                _id: mongoose.Types.ObjectId(id)
            }
        },
        // {
        //     $lookup: {
        //         from: 'topics',
        //         localField: 'topic',
        //         foreignField: 'id',
        //         as: 'topic'
        //     }
        // }
    ]);
    return { ...result[0] };
};

const getReactives = async () => {
    return await reactiveSchema.aggregate([
        {
            $lookup: {
                from: 'topics',
                localField: 'topic',
                foreignField: 'id',
                as: 'topic'
            }
        }
    ]);
};

const getReactiveByTopic = async ({ topic }) => {
    return await reactiveSchema.aggregate([
        {
            $match: {
                topic: parseInt(topic)
            }
        },
        {
            $lookup: {
                from: 'topics',
                localField: 'topic',
                foreignField: 'id',
                as: 'topic'
            }
        }
    ]);
};

const insertReactive = async (reactive) => {
    const newReactive = new reactiveSchema(reactive);
    await reactiveSchema.insertMany(newReactive);
};

const updateReactive = async ({ id }, { valor, markdown }) => {
    await reactiveSchema.updateOne(
        { _id: id },
        {
            $set: {
                valor: valor,
                markdown: markdown
            }
        }
    );
};

const deleteReactive = async ({ id }) => {
    await reactiveSchema.deleteOne({ _id: id });
};

const deleteAllReactive = async () => {
    await reactiveSchema.deleteMany({});
};

module.exports = {
    getReactive,
    getReactives,
    getReactiveByTopic,
    insertReactive,
    updateReactive,
    deleteReactive,
    deleteAllReactive
};
