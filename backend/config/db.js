const mongoose = require('mongoose')

const connectDB = async () => {
   try {
  const conn = await  mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI, () => {
      console.log(`Mongo DB Connected`);
    });
    
   } catch (error) {
    console.error(`Error${error.message}`)
    process.exit();
   }
}

module.exports = connectDB
