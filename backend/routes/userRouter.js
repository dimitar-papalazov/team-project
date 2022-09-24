import express from 'express'
import UserController from '../controllers/UserController.js'

const userRouter = express.Router()
userRouter.get('/:id', UserController.getUser)
userRouter.post('/', UserController.createUser)

export default userRouter