import {Request,Response} from 'express'
import { createMenuObkect } from '../helpers/createMenuObjets'

import {Animal} from '../models/Pet'

export const Search = (req:Request, res:Response)=>{

    let query:string = req.query.q as string

    if(!query){
        res.redirect('/')
    }

    let list = Animal.getFromName(query)

    res.render('pages/home',{
        menu:createMenuObkect(''),
        list,
        query
    })
}

