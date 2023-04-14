//Importing modules
import  express  from "express";
import mongoose from "mongoose";
import models from "../carpooling-app/model/index.js";
import cors from 'cors';

import route from '../carpooling-app/routes/index.js'



const carpooling = express();
carpooling.use(cors());
carpooling.use(express.json());
carpooling.use(express.urlencoded());
route(carpooling);

//connecting to mongodb
mongoose.connect("mongodb+srv://nihil27051:Assasinscreed2@cluster0.onicods.mongodb.net/test");

export default carpooling;


