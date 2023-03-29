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
                localField:'topic',
                foreignField: 'id',
                as: 'topic'
            }
        },
        {
            $unwind: '$topic'
        },
        {
            $lookup: {
                from: 'reactives',
                localField: 'reactives._id',
                foreignField: '_id',
                as: 'reactives'
            }
        },
        {
            $project: {
                "user":1,
                "topic":1,
              "reactives": 1,
            //   "done":1
            //   "reactives.done": 1,
            //   "_id": 1
            }
        },
        // {
        //     $unwind: '$reactive'
        // }
    ]);
    return { ...result[0] };
};
const getExamByUser = async ({ user }) => {
    return await examSchema.aggregate([
        {
            $match: {
                user: parseInt(user)
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
            $unwind: '$user'
        }
    ]);
    // return { ...result[0] };
};

const updateExam = async ({ id }, content) => {
    // console.log(content);
    await examSchema.updateOne(
        {
            _id: id
        },
        content
        // {
        //     $set: {
        //         content
        //     }
        // }
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
    insertExam,
    getExamByUser
};
