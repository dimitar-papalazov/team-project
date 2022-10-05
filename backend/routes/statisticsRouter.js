import express from 'express'
import StatisticController from '../controllers/StatisticController.js'

const statisticsRouter = express.Router()
const statisticsController = new StatisticController()
statisticsRouter.get('/:exercise_id', (req, res) => { statisticsController.getProgress(req, res) })

export default statisticsRouter