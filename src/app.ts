import express from "express";
import helmet from "helmet";
import routes from "./routes"
import dotenv from "dotenv"
dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet())

routes(app)

app.listen(3000,()=>{
    console.log("Application listening ar http://localhost:3000");
});