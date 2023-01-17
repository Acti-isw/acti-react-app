const userSchema = require('../models/user');

/**
 *
 * @returns {Array} users
 */
const getUsers = async () => {
    return await userSchema.aggregate([
        {
            $lookup: {
                from: 'roles',
                localField: 'rol',
                foreignField: 'id',
                as: 'rol'
            }
        },
        {
            $unwind: '$rol'
        }
    ]);
};

/**
 *
 * @param {Integer} id - user ID
 * @returns {Object} user
 */
const getUser = async ({ id }) => {
    return await userSchema.aggregate([
        {
            $match: {
                id: parseInt(id)
            }
        },
        {
            $lookup: {
                from: 'roles',
                localField: 'rol',
                foreignField: 'id',
                as: 'rol'
            }
        },
        {
            $unwind: '$rol'
        }
    ]);
};

/**
 *
 * @param {Integer} id
 * @param {User} user
 */

const updateUser = async ({ id }, user) => {
    await userSchema.findOneAndUpdate({ id: id }, user);
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
