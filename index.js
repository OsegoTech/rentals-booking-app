import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/usersRoute.js"
import hotelsRoute from "./routes/hotelsRoute.js"
import roomsRoute from "./routes/roomsRoute.js"
import cookieParser from "cookie-parser";
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

app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})


app.listen(8800, () => {
    connect()
  console.log("Connected to backend!!!!");
});
