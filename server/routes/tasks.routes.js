import { Router } from "express";
import {
  getAllTask,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controllers.js";

const router = Router();

/**
 * Ruta para el metodo que obtiene todas las tareas
 */
router.get("/tasks", getAllTask);

/**
 * Ruta para el metodo que obtiene una tarea por el id
 */
router.get("/tasks/:id", getTask);

/**
 * Ruta para el metodo que crea una nueva tarea
 */
router.post("/tasks", createTask);

/**
 * Ruta para el metodo que actualiza una tarea
 */
router.put("/tasks/:id", updateTask);

/**
 * Ruta para el metodo que elimina una tarea por el id
 */
router.delete("/tasks/:id", deleteTask);

export default router;
