import usersService from "../services/users.service.js";

const getUsers = async (req, res) => {
    const users = await usersService.getUsers();
    res.status(200).send(users);
};

const postUser = async (req, res) => {
    const newUser = req.body;
    if (JSON.stringify(req.body) === "{}") {
        console.log("Esto es solo un log: objeto vacío");
        console.warn("Esto es una advertencia");
        console.error("Esto es un error");
        throw new Error("El objeto no tiene los parámetros válidos");
    }
    const addedUser = await usersService.postUser(newUser);
    res.status(201).send(addedUser);
};

const putUser = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    const message = await usersService.putUser(id, updatedData);
    res.send(message);
};

const patchUser = async (req, res) => {
    const { id } = req.params;
    const partialData = req.body;
    const message = await usersService.patchUser(id, partialData);
    res.send(message);
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const message = await usersService.deleteUser(id);
    res.send(message);
};

export default {
    getUsers,
    postUser,
    deleteUser,
    putUser,
    patchUser
};