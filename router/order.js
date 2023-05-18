import express from "express";
import { uptadeOrder, createOrder, getOrders } from "../controller/order.js";
const routerOfOrder = express.Router();

routerOfOrder.post("/", createOrder);
routerOfOrder.put("/:id", uptadeOrder);
routerOfOrder.get("/", getOrders);

export default routerOfOrder;
