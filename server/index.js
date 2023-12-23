import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app= express();
dotenv.config();


app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());
app.use('/posts',postRoutes);

// const CONNECTION_URL='mongodb+srv://delsageorge:delsageorge123@cluster0.ede0yfj.mongodb.net/?retryWrites=true&w=majority';
const PORT=process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL)
.then(()=>app.listen(PORT,()=>console.log(`server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message));

//mongoose.set('useFindAndModify',false);


// https://www.mongodb.com/cloud/atlas
//Application string:
//mongodb+srv://delsageorge:delsageorge123@cluster0.ede0yfj.mongodb.net/?retryWrites=true&w=majority


