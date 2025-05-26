const userModel = require("../models/user.model");


class UserRepository {
  async findByEmail(email) {
    return userModel.findOne({ email });
  }

  async create(userData) {
    const user = new userModel(userData);
    return user.save();
  }
}

module.exports = new UserRepository();
