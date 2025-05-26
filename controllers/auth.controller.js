const userService = require("../services/user.service.js");

exports.signUp = async (req, res, next) => {
  try {
    const { name, email, phone, role, agencyName, password } = req.body;
    if (role === 'admin' && !agencyName) {
      return res.status(400).json({ message: 'Agency Name is required for admin' });
    }

    const user = await userService.registerUser({ name, email, phone, role, agencyName, password });
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        agencyName: user.agencyName
      }
    });
  } catch (err) {
    const status = err.statusCode || 500;
    res.status(status).json({ message: err.message || 'Internal Server Error' });
  }
};
