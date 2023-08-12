'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Shippers", [
      {
        id_account: 2,
        name: "Đỗ Đức Hậu",
        email: "n19dccn053@student.ptithcm.edu.vn",
        phone: "0123456789",
        address: "Hồ Chí Minh",
        description: "Hậu-Người giao hàng số 1"
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
