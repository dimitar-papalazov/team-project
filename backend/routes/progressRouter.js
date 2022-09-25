import express from 'express'
import ProgressController from '../controllers/ProgressController.js'

const progressRouter = express.Router()
const progressController = new ProgressController()
progressRouter.get('/:id', (req, res) => { progressController.read(req, res) })
progressRouter.get('/', (req, res) => { progressController.readAll(req, res) })
progressRouter.post('/', (req, res) => { progressController.create(req, res) })
progressRouter.delete('/:id', (req, res) => { progressController.delete(req, res) })
progressRouter.put('/:id', (req, res) => { progressController.update(req, res) })

export default progressRouter