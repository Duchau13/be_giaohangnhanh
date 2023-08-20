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
    return queryInterface.bulkInsert("Order_statuses", [
      {
        id_order:1,
        time_create: "2023-07-28",
        time_receive:"2023-07-30",
        time_received: "2023-08-1",
        time_warehouse:"2023-08-1",
        time_delivery:"2023-08-2",
        time_delivered:"2023-08-3",
        id_shipper_receive:1,
        id_shipper_delivery:2,
        time_confirm:"2023-07-28"

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
