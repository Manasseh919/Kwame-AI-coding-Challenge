const mongoose = require('mongoose')

const connectDB = async() => {
  try {
    const conn = await mongoose.set('strictQuery', true)
    mongoose.connect("mongodb+srv://mannamey:mannamey@cluster0.rm46naj.mongodb.net/?retryWrites=true&w=majority", () => {
      console.log(`Mongo DB Connected ${conn.connection.host}`)
    })
  } catch (error) {
    console.error(`Error${error.message}`)
    process.exit()
  }
}

module.exports = connectDB
