let users = [
    { id: 1, nombre: "Juan Perez", email: "juan.perez@example.com", edad: 30 },
    { id: 2, nombre: "Maria Gomez", email: "maria.gomez@example.com", edad: 25 },
    { id: 3, nombre: "Carlos Rodriguez", email: "carlos.rodriguez@example.com", edad: 28 },
    { id: 4, nombre: "Laura Fernandez", email: "laura.fernandez@example.com", edad: 32 },
    { id: 5, nombre: "Pedro Ramirez", email: "pedro.ramirez@example.com", edad: 40 },
    { id: 6, nombre: "Ana Martinez", email: "ana.martinez@example.com", edad: 22 },
    { id: 7, nombre: "Jorge Lopez", email: "jorge.lopez@example.com", edad: 35 },
    { id: 8, nombre: "Lucia Diaz", email: "lucia.diaz@example.com", edad: 27 },
    { id: 9, nombre: "Sofia Torres", email: "sofia.torres@example.com", edad: 24 },
    { id: 10, nombre: "Luis Hernandez", email: "luis.hernandez@example.com", edad: 29 }
];

// Obtener todos los usuarios
const getUsers = async () => {
    return users;
};

// Agregar un nuevo usuario
const postUser = async (newUser) => {
    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1; // Genera un nuevo ID
    newUser.id = id;
    users.push(newUser);
    return newUser; // Retorna el usuario agregado
};

// Actualizar usuario por ID
const putUser = async (id, updatedData) => {
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index === -1) {
        throw new Error("Usuario no encontrado");
    }
    updatedData.id = parseInt(id);
    users[index] = updatedData; // Actualiza el usuario en la posición encontrada
    return "Actualización exitosa.";
};

// Actualización parcial
const patchUser = async (id, partialData) => {
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index === -1) {
        throw new Error("Usuario no encontrado");
    }
    // Mezcla los datos existentes con los nuevos datos
    const newUser = { ...users[index], ...partialData };
    users[index] = newUser; // Actualiza el usuario en la posición encontrada
    return "Actualización parcial completa.";
};

// Eliminar usuario por ID
const deleteUser = async (id) => {
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index === -1) {
        throw new Error("El ID del usuario no existe.");
    }
    users.splice(index, 1); // Elimina el usuario del array
    return "El usuario fue borrado";
};

export default {
    getUsers,
    postUser,
    putUser,
    patchUser,
    deleteUser
};