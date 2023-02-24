import {Request,Response} from 'express'

import {Animal} from '../models/Pet'
import {createMenuObkect} from '../helpers/createMenuObjets'

export const Home = (req:Request, res:Response)=>{

    let list = Animal.getAll();

    res.render('pages/home',{
        menu:createMenuObkect('all'),
        banner:{
            title:'Todos os animais',
            background:'allanimals.jpg'
        },
        list
    })
}

export const Dogs = (req:Request, res:Response)=>{

    let list = Animal.getFromType('dog');

    res.render('pages/home',{
        menu:createMenuObkect('dog'),
        banner:{
            title:'Cachorros',
            background:'banner_dog.jpg'
        },
        list
    })
}

export const Cats = (req:Request, res:Response)=>{

    let list = Animal.getFromType('cat');

    res.render('pages/home',{
        menu:createMenuObkect('cat'),
        banner:{
            title:'Gatos',
            background:'banner_cat.jpg'
        },
        list
    })
}

export const Fishes = (req:Request, res:Response)=>{

    let list = Animal.getFromType('fish');

    res.render('pages/home',{
        menu:createMenuObkect('fish'),
        banner:{
            title:'Peixes',
            background:'banner_fish.jpg'
        },
        list
    })
}

