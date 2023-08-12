const express = require("express");
const { authenticate } = require("../middlewares/auth/autheticate");
const {authorize} = require("../middlewares/auth/authorize");
const shipperRouter = express.Router();
const {getAllshipper} = require("../controllers/shipper.controllers")

shipperRouter.get("/getallShipper",authenticate,authorize(["Nhân viên"]),getAllshipper)

module.exports ={
    shipperRouter
}