import * as dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

const uri = process.env.DATABASE_URL;

const connectDb = async (req, res) => {
    console.log("connecting to database");
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName:'Gymmini',
      });
      console.log("Database connected.");
    } catch (err) {
      //ต่อไม่ให้ให้ออก
      console.error("connect db failed", err.message);
      //ให้จบโปรแกรม
      process.exit(1);
    }
  };
  export default connectDb;
