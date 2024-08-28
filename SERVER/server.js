import express from "express";
import cors from "cors";
import records from "./routes/record.js";

//Port to connect the server
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors()); //Server will use cors for resource-sharing
app.use(express.json()); 
app.use("/record",records);

//Starting the express server
app.listen(PORT, ()=>{
console.log(`Server listening to port ${PORT}`); });