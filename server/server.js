import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/db.js';
import { inngest, functions } from 'inngest/index.js';

const app = express();

//connecting with dataBase
await connectDB()

app.use(express.json());
app.use(cors())

app.get('/', (req,res)=> res.send('Server is running'))
app.use('/api/inngest', serve({ client: inngest, functions})) //http endpoint for inngest

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log(`server is running on port : ${PORT}`);
    
})