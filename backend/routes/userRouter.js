import express from 'express'
import UserController from '../controllers/UserController.js'

const userRouter = express.Router()
const userController = new UserController()
userRouter.get('/:id', (req, res) => { userController.read(req, res) })
userRouter.get('/', (req, res) => { userController.readAll(req, res) })
userRouter.post('/', (req, res) => { userController.create(req, res) })
userRouter.delete('/:id', (req, res) => { userController.delete(req, res) })
userRouter.put('/:id', (req, res) => { userController.update(req, res) })

export default userRouter