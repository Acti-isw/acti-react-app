const challengeSchema = require('../models/challenge');

const getChallenges = async () => {
    return await challengeSchema.find();
};

const getChallenge = async ({ id }) => {
    return await challengeSchema.find({ _id: id });
};

const insertChallenge = async (challenge) => {
    const newChallenge = new challengeSchema(challenge);
    await challengeSchema.insertMany(newChallenge);
};

const updateChallenge = async (
    { id },
    { nombre, descripcion, listadoConocimiento }
) => {
    await challengeSchema.updateOne(
        { _id: id },
        {
            $set: {
                nombre: nombre,
                descripcion: descripcion,
                listadoConocimiento: listadoConocimiento
            }
        }
    );
};

const deleteChallenge = async ({ id }) => {
    await challengeSchema.deleteOne({ _id: id });
};

const deleteAllChallenges = async () => {
    await challengeSchema.deleteMany({});
};

module.exports = {
    getChallenges,
    getChallenge,
    insertChallenge,
    updateChallenge,
    deleteChallenge,
    deleteAllChallenges
};
