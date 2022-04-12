const db = require("../db/dbConnection");

exports.addEvent = (req, res) => {
  let consentData = req.body;
  let userID = consentData.user.id;

  consentData.consents.forEach((consent) => {
    if (
      consent.id != "email_notifications" ||
      consent.id != "sms_notifications"
    ) {
      return res.status(422).send({
        status: "error",
        message:
          "Consent ID must be either email_notifications or sms_notifications",
      });
    }
    let sql = `INSERT INTO events (user_id, consent_id, consent_enabled) VALUES('${userID}', '${consent.id}',  '${consent.enabled}')`;
    db.query(sql, (err, results, fields) => {
      if (err) {
        return console.error(err.message);
      }
      console.log(results);
    });
  });
  db.end();

  res.status(200).send({
    status: "success",
    message: "Events created successfully!",
  });
};
