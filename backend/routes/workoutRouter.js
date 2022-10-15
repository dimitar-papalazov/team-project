import express from 'express'
import WorkoutController from '../controllers/WorkoutController.js'

const workoutRouter = express.Router()
const workoutController = new WorkoutController()
workoutRouter.get('/:id', (req, res) => { workoutController.read(req, res) })
workoutRouter.get('/', (req, res) => { workoutController.readAll(req, res) })
workoutRouter.get('/relations', (req, res) => { workoutController.relations(req, res) })
workoutRouter.post('/', (req, res) => { workoutController.create(req, res) })
workoutRouter.post('/addRelation', (req, res) => { workoutController.addRelation(req, res) })
workoutRouter.delete('/:id', (req, res) => { workoutController.delete(req, res) })
workoutRouter.put('/:id', (req, res) => { workoutController.update(req, res) })

export default workoutRouter