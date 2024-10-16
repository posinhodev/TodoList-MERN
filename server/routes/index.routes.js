import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/ping", async (req, res) => {
  try {
    const connection = await pool.getConnection(); // Obtiene una conexión del pool
    connection.release(); // Libera la conexión de nuevo al pool

    res.json({ message: "Database connection successful" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Database connection failed", error: error.message });
  }
});

export default router;
