const {
    getExams,
    getExamById,
    updateExam,
    deleteExam,
    deleteAllExams,
    insertExam
} = require('../services/examService');

const getAll = async (__, res, next) => {
    try {
        const exams = await getExams();
        res.status(200).json(exams);
    } catch (err) {
        next(err);
    }
};

const get = async (req, res, next) => {
    try {
        const exams = await getExamById(req.params);
        res.status(200).json(exams);
    } catch (err) {
        next(err);
    }
};

const put = async (req, res, next) => {
    try {
        const exams = await updateExam(req.params, req.body);
        res.status(200).json(exams);
    } catch (err) {
        next(err);
    }
};

const post = async (req, res, next) => {
    try {
        const newExam = req.body;
        await insertExam(newExam);
        res.status(201).json(newExam);
    } catch (err) {
        next(err);
    }
};

const del = async (req, res, next) => {
    try {
        await deleteExam(req.params);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

const delAll = async (__, res, next) => {
    try {
        await deleteAllExams();
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAll,
    get,
    put,
    post,
    del,
    delAll
};
