const db = require("../db/dbConnection");
const { generateUserID } = require("../helpers/utilities");

/**
 * Queries the user table for occurrence of the passed email address
 *
 * @param string db
 * @param string  email
 *
 * @returns boolean true | false
 */
exports.addUser = (req, res) => {
  let userEmail = req.body.email;
  //   if (!userEmail || userEmail == "") return;

  console.log(generateUserID);

  //   //If everything goes well, we insert to table
  //   let sql = `INSERT INTO users (id, email) VALUES('${userID}', '${userEmail}')`;
  //   db.query(sql, (err, results, fields) => {
  //     if (err) {
  //       return console.error(err.message);
  //     }
  //     console.log(results);
  //   });
  //   db.end();

  res.status(200).send({
    id: "22222435-5634-5645-4539-878635365456",
    email: "valid@email.com",
    consents: [],
  });
};

/**
 * Queries the user table for occurrence of the passed email address
 *
 * @param string db
 * @param string  email
 *
 * @returns boolean true | false
 */
const isEmailExists = (db, email) => {
  let sql = `SELECT * FROM users WHERE email = '${email}'`;
  db.query(sql, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    results ? true : false;
  });
};
//   console.log(isEmailExists(db, userEmail));
