import express from "express";
import {
  createServices,
  deleteService,
  getAllService,
  getService,
} from "../controller/service.js";
import { checkAdminRole, checkOwnerRole } from "../middleware/role.js";

const routerOfService = express.Router();

routerOfService.get("/", getAllService);
routerOfService.post("/", checkOwnerRole, createServices);
routerOfService
  .route("/:id")
  .delete(checkOwnerRole, checkAdminRole, deleteService)
  .get(getService);

export default routerOfService;
