"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Orders", [
      {
        id_customer: 1,
        id_type: 1,
        time_create: "2023-07-28",
        delivery_fee: 25000,
        item_fee: 305000,
        total: 330000,
        status: 0,
        address_receive: "Quận 9 TPHCM",
        address_delivery: "Quận 1 TPHCM",
        phone_receive: "0999999999",
        weight: "8",
      },
      {
        id_customer: 1,
        id_type: 1,
        time_create: "2023-07-28",
        delivery_fee: 25000,
        item_fee: 305000,
        total: 330000,
        status: 0,
        address_receive: "Quận 9 TPHCM",
        address_delivery: "Quận 1 TPHCM",
        phone_receive: "0999999999",
        weight: "5",
      },
      {
        id_customer: 1,
        id_type: 1,
        time_create: "2023-07-28",
        delivery_fee: 25000,
        item_fee: 305000,
        total: 330000,
        status: 0,
        address_receive: "Quận 9 TPHCM",
        address_delivery: "Quận 1 TPHCM",
        phone_receive: "0999999999",
        weight: "7",
      },
      {
        id_customer: 1,
        id_type: 2,
        time_create: "2023-07-28",
        delivery_fee: 20000,
        item_fee: 305000,
        total: 325000,
        status: 0,
        address_receive: "Quận 9 TPHCM",
        address_delivery: "Quận 1 TPHCM",
        phone_receive: "0999999999",
        weight: "12",
      },
      {
        id_customer: 1,
        id_type: 2,
        time_create: "2023-07-28",
        delivery_fee: 20000,
        item_fee: 305000,
        total: 325000,
        status: 0,
        address_receive: "Quận 9 TPHCM",
        address_delivery: "Quận 1 TPHCM",
        phone_receive: "0999999999",
        weight: "11",
      },
      {
        id_customer: 1,
        id_type: 2,
        time_create: "2023-07-28",
        delivery_fee: 20000,
        item_fee: 305000,
        total: 325000,
        status: 0,
        address_receive: "Quận 9 TPHCM",
        address_delivery: "Quận 1 TPHCM",
        phone_receive: "0999999999",
        weight: "10",
      },
      {
        id_customer: 1,
        id_type: 2,
        time_create: "2023-07-28",
        delivery_fee: 20000,
        item_fee: 305000,
        total: 325000,
        status: 0,
        address_receive: "Quận 9 TPHCM",
        address_delivery: "Quận 1 TPHCM",
        phone_receive: "0999999999",
        weight: "3",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
