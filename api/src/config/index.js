module.exports = {
  MDB_URL: process.env.MDB_URL || "mongodb://localhost/js-ecommerce-02-22",
  JWT_SECRET: process.env.JWT_SECRET || "jwt_secret_123",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || 604800, // 1 week
};
