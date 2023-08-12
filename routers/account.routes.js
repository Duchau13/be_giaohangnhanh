const express = require("express");
const {Account} = require("../models")
const accountRouter = express.Router();
const {createAccountForCustomer,createAccountForShipper,loginShipper,loginUser,changePassword} = require("../controllers/account.controllers")
const { checkCreateAccount, checkCreateEmail } = require("../middlewares/validates/Checkcreate");
const {authenticate, authenticateRefreshToken} = require("../middlewares/auth/autheticate");
const {checkExistAccount} = require("../middlewares/validates/Checkexit")

accountRouter.post("/shipper/login", checkExistAccount(Account), loginShipper);
accountRouter.post("/login", checkExistAccount(Account), loginUser);
accountRouter.post("/create", checkCreateAccount(Account), checkCreateEmail, createAccountForCustomer);
accountRouter.post("/shipper/create", checkCreateAccount(Account), checkCreateEmail, createAccountForShipper);
accountRouter.put("/changepassword", authenticate, changePassword);


module.exports = {
    accountRouter,
}