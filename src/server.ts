import express,{Request,Response} from 'express'
import dontenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'

import MainRoutes from './routes/index.routes'

dontenv.config();

const app = express()

app.set('view engine','mustache')
app.set('views',path.join(__dirname,'views'))
app.engine('mustache',mustache())

app.use(express.static(path.join(__dirname,'../public')))

app.use(MainRoutes)

app.use((req:Request,res:Response)=>{
    res.render('pages/404')
})

app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}/`)
});

