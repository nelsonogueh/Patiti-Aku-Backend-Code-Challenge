const isEmail = require("isemail");

exports.generateUserID = function () {};

exports.validateEmailAddress = (email) => {
  !!isEmail(email);
};
