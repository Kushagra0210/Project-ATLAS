let users = [];
const getUsers = (req, res) => {
    res.json(users);
};
const getUserbyId = (res, req) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) {
        return res.status(404).json({
            message: "user not found"
        });
    }
    res.json(user);
};
const createUser = (req, res) => {
    const newUser = {
        id: Date.now(),
        ...req.body
    };
    users.push(newUser);
    res.status(201).json(newUser);
};
const updateUser = (req, res) => {
    const index = users.findIndex(u => u.id == req.params.id);
    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }
    users[index] = {
        ...users[index],
        ...req.body

    };
    res.json(users[index]);
};
const deleteUser = (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.json({
        message: "user deleted successfully"
    });
};
module.exports = {
    getUsers,
    getUserbyId,
    createUser,
    updateUser,
    deleteUser
}