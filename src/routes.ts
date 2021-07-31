import { Router } from "express";
import AuthenticateUserController from "./controllers/AuthenticateUserController";
import CreateComplimentController from "./controllers/CreateComplimentController";
import CreateTagController from "./controllers/CreateTagController";
import CreateUserController from "./controllers/CreateUserController";
import ListTagsController from "./controllers/ListTagsController";
import ListUserReceiveComplimentsController from "./controllers/ListUserReceiveComplimentsController";
import ListUsersController from "./controllers/ListUsersController";
import ListUserSendComplimentsController from "./controllers/ListUserSendComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

export const router = Router();

router.post("/users", CreateUserController.handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  CreateTagController.handle
);
router.post("/login", AuthenticateUserController.handle);
router.post(
  "/compliments",
  ensureAuthenticated,
  CreateComplimentController.handle
);

router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  ListUserSendComplimentsController.handle
);
router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  ListUserReceiveComplimentsController.handle
);
router.get("/tags", ensureAuthenticated, ListTagsController.handle);
router.get("/users", ensureAuthenticated, ListUsersController.handle);
