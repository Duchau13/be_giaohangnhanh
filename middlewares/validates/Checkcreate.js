const {
    Shipper,
    Customer
} = require("../../models");

const { QueryTypes } = require("sequelize");


const checkCreateAccount = (Model) => {
    return async (req, res, next) => {
      const { username } = req.body;
      const account = await Model.findOne({
        where: {
          username,
        },
      });
      if (!account) {
        next();
      } else {
        res.status(400).json({ message: "Tài khoản đã tồn tại!" });
      }
    };
};


const checkCreateEmail = async (req, res, next) => {
    const { email } = req.body
    try {
      const customer = await Customer.findOne({
        where: {
          email,
        },
      });
      const shipper = await Shipper.findOne({
        where: {
          email,
        },
      });
      if(customer || shipper){
        res.status(400).json({ message: "Địa chỉ email đã tồn tại!" });
      }
      else {
        next();
      }
    } catch (error) {
      res.status(500).json({ message: "Đã có lỗi xảy ra!" });
    }
}

module.exports = {
    checkCreateEmail,
    checkCreateAccount
};
  