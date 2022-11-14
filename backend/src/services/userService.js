const userSchema = require('../models/user');

/**
 *
 * @returns {Array} users
 */
const getUsers = async () => {
    return await userSchema.find().populate('role');
};

/**
 *
 * @param {Integer} id - user ID
 * @returns {Object} user
 */
const getUser = async ({ id }) => {
    return await userSchema.find({ id: id });
};

/**
 *
 * @param {Integer} id - user ID
 * @param {String} name, email - user name and email
 */
const updateUser = async ({ id }, { name, email, role }) => {
    await userSchema.updateOne(
        {
            id: id
        },
        {
            $set: {
                name: name,
                email: email,
                role: role
            }
        }
    );
};

/**
 *
 * @param {Integer} id - user ID
 */
const deleteUser = async ({ id }) => {
    await userSchema.deleteOne({ id: id });
};

/**
 *
 * @param {Object} user
 */
const insertUser = async (user) => {
    try {
        const newUser = new userSchema(user);
        await userSchema.insertMany(newUser);
    } catch (err) {
        console.log(err);
    }
};

// Dev only

const deleteAllUsers = async () => {
    await userSchema.deleteMany({});
};

module.exports = {
    getUsers,
    getUser,
    insertUser,
    updateUser,
    deleteAllUsers,
    deleteUser
};
