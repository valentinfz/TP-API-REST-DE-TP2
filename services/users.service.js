import usuariosModel from "../models/users.model.js";

// Servicio que obtiene todos los usuarios
const getUsers = async () => {
    return usuariosModel.getUsers();
};

// Servicio que agrega un nuevo usuario
const postUser = async (user) => {
    return usuariosModel.postUser(user);
};

// Servicio que actualiza completamente un usuario
const putUser = async (id, data) => {
    return usuariosModel.putUser(id, data);
};

// Servicio que actualiza parcialmente un usuario
const patchUser = async (id, data) => {
    return usuariosModel.patchUser(id, data);
};

// Servicio que elimina un usuario
const deleteUser = async (id) => {
    return usuariosModel.deleteUser(id);
};

// Todos los servicios
export default {
    getUsers,
    postUser,
    putUser,
    patchUser,
    deleteUser
};
