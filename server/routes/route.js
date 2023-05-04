import express from "express";
import { addUser, getUsers } from "../controller/user-controller.js";
import { newConversation } from "../controller/conversation-controller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/users", getUsers);
router.post("/conversation/add", newConversation);

export default router;
