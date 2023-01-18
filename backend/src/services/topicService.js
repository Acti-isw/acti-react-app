const topicSchema = require('../models/topic');

const getTopic = async ({ id }) => {
    return await topicSchema.find({ id: id });
};

const getTopics = async () => {
    return await topicSchema.find();
};

const updateTopic = async (
    { id },
    { nombre, descripcion, listadoConocimiento }
) => {
    await topicSchema.updateOne(
        {
            id: id
        },
        {
            $set: {
                nombre: nombre,
                descripcion: descripcion,
                listadoConocimiento: listadoConocimiento
            }
        }
    );
};

const deleteTopic = async ({ id }) => {
    await topicSchema.deleteOne({ id: id });
};

const insertTopic = async (topic) => {
    const newTopic = new topicSchema(topic);
    await topicSchema.insertMany(newTopic);
};

// Dev only

const deleteAllTopics = async () => {
    await topicSchema.deleteMany({});
};

module.exports = {
    getTopics,
    getTopic,
    insertTopic,
    updateTopic,
    deleteTopic,
    deleteAllTopics
};
