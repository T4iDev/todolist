const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@todolist.uyinssl.mongodb.net/?retryWrites=true&w=majority",
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
