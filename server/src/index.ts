import * as express from 'express'
import {Request, Response} from 'express'

const app = express();

app.get('/', (req:Request, res:Response)=>{
    console.log('hello');
})

