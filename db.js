const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://admin:0DZvZvXnRqp1EEwP@nawafs-cluster.6fw1x.mongodb.net/test",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
