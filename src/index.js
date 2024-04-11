import "dotenv/config";
import mongoose from "mongoose";
import { CreateApp } from "./app.js";

const PORT = process.env.PORT || 3001;
const MONGO_STRING = process.env.MONGO_STRING;

const app = CreateApp();

//Connecter la base de données 

mongoose.connect(MONGO_STRING).then(() => {
  console.log("Connected to the database!");


  // Démarrage serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});