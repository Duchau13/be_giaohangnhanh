const express = require("express");
const {Account} = require("../models");
const { authenticate } = require("../middlewares/auth/autheticate");
const {authorize} = require("../middlewares/auth/authorize");
const {createOrder,getAllOrder,confirmOrder,cancelOrder,receiveOrder,shipperReceived,wareHoused_order,delivery_Order,received_wareHouse,finished_order,customer_cancelOrder,wareHoused_orderCancel,delivery_CancelOrder,getOrderCustomer,getOrderforShipperReceive,getOrderforShipperDelivery,cancelOrderforUser} = require("../controllers/orders.controllers")
const orderRouter = express.Router();

orderRouter.post("/create",authenticate,createOrder)
orderRouter.get("/",authenticate,getAllOrder)
orderRouter.get("/confirm/:id_order",authenticate,authorize(["Nhân viên"]),confirmOrder)
orderRouter.put("/cancel/:id_order",authenticate,authorize(["Nhân viên"]),cancelOrder)
orderRouter.get("/receive/:id_order/:id_shipper",authenticate,authorize(["Nhân viên"]),receiveOrder)
orderRouter.get("/received_order/:id_order",authenticate,authorize(["Người giao hàng"]),shipperReceived)
orderRouter.get("/wareHoused_order/:id_order",authenticate,authorize(["Người giao hàng"]),wareHoused_order)
orderRouter.get("/delivery/:id_order/:id_shipper",authenticate,authorize(["Nhân viên"]),delivery_Order)
orderRouter.get("/received_wareHouse/:id_order",authenticate,authorize(["Người giao hàng"]),received_wareHouse)
orderRouter.get("/finished_order/:id_order",authenticate,authorize(["Người giao hàng"]),finished_order)
orderRouter.put("/customer_cancelOrder/:id_order",authenticate,authorize(["Người giao hàng"]),customer_cancelOrder)
orderRouter.get("/wareHoused_orderCancel/:id_order",authenticate,authorize(["Người giao hàng"]),wareHoused_orderCancel)
orderRouter.get("/delivery_CancelOrder/:id_order/:id_shipper",authenticate,authorize(["Nhân viên"]),delivery_CancelOrder)
orderRouter.get("/customer/:phone_receive",authenticate,authorize(["Khách hàng"]),getOrderCustomer)
orderRouter.get("/shipper/receive",authenticate,authorize(["Người giao hàng"]),getOrderforShipperReceive)
orderRouter.get("/shipper/delivery",authenticate,authorize(["Người giao hàng"]),getOrderforShipperDelivery)
orderRouter.get("/user/cancel/:id_order",authenticate,authorize(["Khách hàng"]),cancelOrderforUser)
module.exports ={
    orderRouter
}