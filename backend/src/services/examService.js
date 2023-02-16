const { default: mongoose } = require('mongoose');
const examSchema = require('../models/exam');

const getExams = async () => {
    return await examSchema.aggregate([
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

const getExamById = async ({ id }) => {
    let result = await examSchema.aggregate([
        {
            $match: {
                _id: mongoose.Types.ObjectId(id)
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
    return { ...result[0] };
};

const updateExam = async ({ id }, { content }) => {
    await examSchema.updateOne(
        {
            id: id
        },
        {
            $set: {
                content: content
            }
        }
    );
};

const deleteExam = async ({ id }) => {
    await examSchema.deleteOne({ id: id });
};

const insertExam = async (exam) => {
    const newExam = new examSchema(exam);
    await examSchema.insertMany(newExam);
};

const deleteAllExams = async () => {
    await examSchema.deleteMany({});
};

module.exports = {
    getExams,
    getExamById,
    updateExam,
    deleteExam,
    deleteAllExams,
    insertExam
};
