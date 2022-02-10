const bcrypt = require("bcryptjs");
const UserModel = require("./user.model");

exports.register = (req, res, next) => {
  const { name, email, phone, password } = req.body;

  const newUser = new UserModel({
    name,
    email,
    phone,
    password,
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) return next(err);
      newUser.password = hash;
      newUser.save((err, data) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Failed to create new user.",
            errors: err.errors,
          });
        }
        return res.status(201).json({
          success: true,
          message: "User created successfully",
          data: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            userId: data._id,
          },
        });
      });
    });
  });
};

exports.login = (req, res) => {
  res.json({
    msg: "login",
  });
};
