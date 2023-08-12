const express = require('express');
const rootRouter = express.Router();
const {accountRouter} = require("./account.routes")
const {orderRouter} = require("./orders.routes")
const {shipperRouter} = require("./shipper.routes")

rootRouter.use("/account", accountRouter);
rootRouter.use("/order", orderRouter);
rootRouter.use("/shipper", shipperRouter);

module.exports = {
    rootRouter,
}