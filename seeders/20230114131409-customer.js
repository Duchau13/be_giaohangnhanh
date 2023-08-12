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
    return queryInterface.bulkInsert("Customers", [
      {
        id_account: 1,
        name: "Đỗ Đức Hậu",
        email: "n19dccn053@student.ptithcm.edu.vn",
        phone: "0123456789",
        address: "Cầu Xã Tĩnh, Bình Lợi, Huyện Bình Chánh, Thành phố Hồ Chí Minh",
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
