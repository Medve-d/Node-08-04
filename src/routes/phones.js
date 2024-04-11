import express from "express";
import {
  createPhone,
  deletePhone,
  getPhone,
  getPhones,
  getError,
  udpatePhone,
} from "../controller/phones.js";
import { body } from "express-validator";

const router = express.Router();

// GET http://localhost:3001/cars
/* router.get("/phones", getPhones)

// GET http://localhost:3001/cars/1
router.get("/:id", getPhone);

// POST http://localhost:3001/cars
router.post(
  "/",
  [
    body("brand").trim().isLength({ max: 20, min: 2 }),
    body("model").trim().isLength({ min: 2, max: 100 }),
  ],
  createPhone
);

router.put("/:id", udpatePhone);

router.delete("/:id", deletePhone);

// ERROR
router.get("/error", getError); */
export default router;
