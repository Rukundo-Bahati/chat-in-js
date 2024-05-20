require("dotenv").config();
const express = require("express");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const app = express();
const cors=require("cors")

//Db Connection
connection()

//middlewares
app.use(express.json());
app.use(cors())

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5600;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}..`));
