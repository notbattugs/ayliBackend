import express from "express";
import { createExtraService } from "../controller/extraService.js";
const routerOfExtraService = express.Router();

routerOfExtraService.post("/", createExtraService);

export default routerOfExtraService;
