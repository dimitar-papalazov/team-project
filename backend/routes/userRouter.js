import express from 'express'
import UserController from '../controllers/UserController.js'

const userRouter = express.Router()
const userController = new UserController()
userRouter.get('/:id', (req, res) => { userController.readUser(req, res) })
userRouter.post('/', (req, res) => { userController.createUser(req, res) })
userRouter.delete('/:id', (req, res) => { userController.deleteUser(req, res) })

export default userRouter