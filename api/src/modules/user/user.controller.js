const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config");
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

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  UserModel.findOne({ email }).exec((err, user) => {
    if (err) return next(err);

    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User not found",
      });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return next(err);

      if (isMatch) {
        const userData = {
          userId: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
        };
        const token = jwt.sign(
          {
            type: "user",
            data: userData,
          },
          config.JWT_SECRET,
          {
            expiresIn: config.JWT_EXPIRES_IN,
          }
        );

        return res.json({
          success: true,
          access_token: "JWT " + token,
          data: userData,
        });
      } else {
        return res.json({
          success: false,
          param: "password",
          msg: "Wrong password",
        });
      }
    });
  });
};
