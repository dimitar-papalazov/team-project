import express from 'express'
import ExerciseController from '../controllers/ExerciseController.js'

const exerciseRouter = express.Router()
const exerciseController = new ExerciseController()
exerciseRouter.get('/:id', (req, res) => { exerciseController.read(req, res) })
exerciseRouter.get('/', (req, res) => { exerciseController.readAll(req, res) })
exerciseRouter.post('/', (req, res) => { exerciseController.create(req, res) })
exerciseRouter.delete('/:id', (req, res) => { exerciseController.delete(req, res) })
exerciseRouter.put('/:id', (req, res) => { exerciseController.update(req, res) })

export default exerciseRouter