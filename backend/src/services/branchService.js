const branchSchema = require('../models/branch');

const getBranch = async ({ id }) => {
    return await branchSchema.find({ _id: id });
};

const getBranches = async () => {
    return await branchSchema.find();
};

const insertBranch = async (branch) => {
    const newBranch = new branchSchema(branch);
    await branchSchema.insertMany(newBranch);
};

const updateBranch = async ({ id }, { nombre, descripcion }) => {
    await branchSchema.updateOne(
        { _id: id },
        {
            $set: {
                nombre: nombre,
                descripcion: descripcion
            }
        }
    );
};

const deleteBranch = async ({ id }) => {
    await branchSchema.deleteOne({ _id: id });
};

const deleteAllBranch = async () => {
    await branchSchema.deleteMany({});
};

module.exports = {
    getBranch,
    getBranches,
    insertBranch,
    updateBranch,
    deleteBranch,
    deleteAllBranch
};
