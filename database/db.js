const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      process.env.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Mongoose Connected!");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = connectToDb;
