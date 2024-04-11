import Router from "express";

import authRouter from "./auth.js";
import PhoneRouter from "./phones.js";
import fileRouter from "./file.js";

const router = Router();

router.use("/auth", authRouter);

router.use("/phones", PhoneRouter);

router.use("/uploads", fileRouter);

export default router;