import mongoose, { mongo } from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://fabbiodv:passwordmongo@cluster0.9v6dhnr.mongodb.net/partyckets?retryWrites=true&w=majority")
    console.log(">>> DB is connected")
  } catch (error) {
    console.log(error)
  }
}