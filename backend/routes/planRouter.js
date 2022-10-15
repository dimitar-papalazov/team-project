import express from 'express'
import PlanController from '../controllers/PlanController.js'

const planRouter = express.Router()
const planController = new PlanController()
planRouter.get('/:id', (req, res) => { planController.read(req, res) })
planRouter.get('/', (req, res) => { planController.readAll(req, res) })
planRouter.get('/relations', (req, res) => { planController.relations(req, res) })
planRouter.post('/', (req, res) => { planController.create(req, res) })
planRouter.post('/addRelation', (req, res) => { planController.addRelation(req, res) })
planRouter.delete('/:id', (req, res) => { planController.delete(req, res) })
planRouter.put('/:id', (req, res) => { planController.update(req, res) })

export default planRouter