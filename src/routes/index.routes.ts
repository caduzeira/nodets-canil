import {Router, Request, Response} from 'express'
import * as PagesAnimals from '../controllers/page'
import * as Search from '../controllers/search'

const router = Router();

router.get('/', PagesAnimals.Home)
router.get('/dogs',PagesAnimals.Dogs)
router.get('/cats',PagesAnimals.Cats)
router.get('/fishes',PagesAnimals.Fishes)

router.get('/',Search.Search)

export default router