import {Request,Response} from 'express'

export const Home = (req:Request, res:Response)=>{
    res.send("Home")
}

export const Dogs = (req:Request, res:Response)=>{
    res.send("Dog")
}

export const Cats = (req:Request, res:Response)=>{
    res.send("Cat")
}

export const Fishes = (req:Request, res:Response)=>{
    res.send("Fish")
}

