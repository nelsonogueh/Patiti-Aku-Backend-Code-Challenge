const { validateEmailAddress } = require("../helpers/utilities");

exports.validationMiddleware = (req, res) => {
  try {
    const email = req.body.email;
    validateEmailAddress(email);
  } catch (exception) {
    res.status(422).send({
      status: "error",
      message: "Invalid email address",
    });
  }
  next();
};
