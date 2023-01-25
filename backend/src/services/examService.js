const examSchema = require('../models/exam');

const getExams = async () => {
    return await examSchema.aggregate([
        {
            $lookup: {
                from: 'topics',
                localField: 'content.topic',
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
    return await examSchema.aggregate([
        {
            $match: {
                id: id
            }
        },
        {
            $lookup: {
                from: 'topics',
                localField: 'content.topic',
                foreignField: 'id',
                as: 'topic'
            }
        },
        {
            $unwind: '$topic'
        }
    ]);
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
