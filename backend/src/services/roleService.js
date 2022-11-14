const roleSchema = require('../models/role');

/**
 *
 * @returns {Array} roles
 */
const getRoles = async () => {
    return await roleSchema.find();
};

/**
 *
 * @param {Integer} id - role ID
 * @returns {Object} role
 */
const getRole = async ({ id }) => {
    return await roleSchema.find({ id: id });
};

/**
 *
 * @param {Integer} id - role ID
 * @param {String} name, description - role name and description
 */
const updateRole = async ({ id }, { name, description }) => {
    await roleSchema.updateOne(
        {
            id: id
        },
        {
            $set: {
                name: name,
                description: description
            }
        }
    );
};

/**
 *
 * @param {Integer} id - role ID
 */
const deleteRole = async ({ id }) => {
    await roleSchema.deleteOne({ id: id });
};

/**
 *
 * @param {Object} role
 */
const insertRole = async (role) => {
    const newRole = new roleSchema(role);
    await roleSchema.insertMany(newRole);
};

// Dev only

const deleteAllRoles = async () => {
    await roleSchema.deleteMany({});
};

module.exports = {
    getRoles,
    getRole,
    insertRole,
    updateRole,
    deleteRole,
    deleteAllRoles
};
