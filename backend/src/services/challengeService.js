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
    { nombre, indicaciones, tema, complejidad, imagenes, hipervinculo, recursos, guias, dificultad }
) => {
    await challengeSchema.updateOne(
        { _id: id },
        {
            $set: {
                nombre: nombre,
                indicaciones: indicaciones,
                tema: tema,
                complejidad:complejidad,
                imagenes:imagenes,
                hipervinculo: hipervinculo,
                recursos:recursos,
                guias:guias, 
                dificultad:dificultad
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
