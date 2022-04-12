const isEmail = require("isemail");

exports.validateEmailAddress = (email) => {
  return isEmail(email);
};

exports.generateUserID = () => {
  return (
    Math.floor(100000 + Math.random() * 90000000) +
    "-" +
    Math.floor(1000 + Math.random() * 9000) +
    "-" +
    Math.floor(1000 + Math.random() * 9000) +
    "-" +
    Math.floor(1000 + Math.random() * 9000) +
    "-" +
    Math.floor(100000000000 + Math.random() * 9000000000000)
  );
};
