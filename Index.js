import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from "dotenv";
import userRoutes from './routes/users.js'
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";

const app = express();
dotenv.config();
app.use (express.json({limit: "30mb", extended:true}))
app.use(express.urlencoded({limit: "30mb", extended:true}))
app.use(cors());
app.get('/',(req, res) => {
    res.send("This is a stack overflow clone API")
   })
   app.use("/user", userRoutes);
   app.use("/questions", questionRoutes);
   app.use("/answer", answerRoutes);
 const PORT = process.env.PORT || 5000;
  //  const CONNECTION_URL = "mongodb+srv://rajpararidhdhy:5P0fi1mrKqWgV867@stak9.1quzk6h.mongodb.net/stak9?retryWrites=true&w=majority";
 
  //  const CONNECTION_URL = "mongodb+srv://rajpararidhdhy:5P0fi1mrKqWgV867@stak9.1quzk6h.mongodb.net/stak9?retryWrites=true&w=majority";
                              // mongodb+srv://rajpararidhdhy:<password>@stak9.1quzk6h.mongodb.net/?retryWrites=true&w=majority&appName=stak9 
  const DATABASE_URL = process.env.CONNECTION_URL
  //  mongoose.connect(CONNECTION_URL, 
    mongoose.connect(DATABASE_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true}
    )
   .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
   .catch((err) => console.log(err.message))