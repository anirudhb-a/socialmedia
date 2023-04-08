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
mongoose.connect("mongodb://127.0.0.1/test");

export default carpooling;


