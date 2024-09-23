import express from 'express'
import cors from 'cors'

import { connectedDataBase } from './config/database.js'
import foodRouter from './routes/foodRoute.js'




// app config
const app = express()
const port = 4000


// middleware

app.use(express.json())
app.use(cors())

// db connection
connectedDataBase()

// API END POINTS:

app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))


app.listen(port, () => {
    console.log(`server is running at port ${port}`);

})