import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
const app = express();

dotenv.config();
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb");
      } catch (error) {
        throw error;
      }
};

mongoose.connection.on("connected", () => {
    console.log("mongodb connected");
})

mongoose.connection.on("disconnected", () => {
    console.log("mongodb disconnected");
})

// Middlewares
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)


app.listen(8800, () => {
    connect()
  console.log("Connected to backend!!!!");
});
