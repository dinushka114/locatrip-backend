const userRepository = require("../repositories/user.repository.js");

class UserService {
  async registerUser({ name, email, phone, role, agencyName, password }) {
    const existing = await userRepo.findByEmail(email);
    if (existing) {
      const err = new Error('Email already in use');
      err.statusCode = 409;
      throw err;
    }

    const user = await userRepo.create({ name, email, phone, role, agencyName, password });
    user.password = undefined;
    return user;
  }
}

module.exports = new UserService();
