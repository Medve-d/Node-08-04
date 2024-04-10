import Router from "express";

import authRouter from "./auth.js";
import PhoneRouter from "./phones.js";
import fileRouter from "./file.js";

const router = Router();

router.use("/auth", authRouter);

router.use("/phone", PhoneRouter);

router.use("/uploads", fileRouter);

export default router;