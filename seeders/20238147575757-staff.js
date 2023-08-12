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
    return queryInterface.bulkInsert("Staffs", [
      {
        id_account: 4,
        name: "Đỗ Đức Huy",
        gender:"Nam",
        email: "duchau12@gmail.com",
        phone: "0123456722",
        address: "Cầu Xã Tĩnh, Bình Lợi, Huyện Bình Chánh, Thành phố Hồ Chí Minh",
      },
      {
        id_account: 5,
        name: "Hậu",
        gender:"Nam",
        email: "duchau13@gmail.com",
        phone: "0123456724",
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
