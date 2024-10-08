import usersController from "../controllers/users.controller.js";
import express from "express";

const router = express.Router();

// Rutas de usuarios
router.get("/users", usersController.getUsers);
router.post("/users", usersController.postUser);
// Actualización de todo el contenido
router.put("/users/update/:id", usersController.putUser);
// Actualización parcial
router.patch("/users/update/:id", usersController.patchUser);
router.delete("/users/delete/:id", usersController.deleteUser);

export default router;
