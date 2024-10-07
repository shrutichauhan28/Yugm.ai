// const jwt = require('jsonwebtoken');

// const generateToken = (userId) => {
//   return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
// };

// module.exports = generateToken;
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  // Ensure the JWT_SECRET is defined
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

module.exports = generateToken;