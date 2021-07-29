import { Router } from "express";
import CreateUserController from "./controllers/CreateUserController";

export const router = Router();

router.post("/user", CreateUserController.createUser);
