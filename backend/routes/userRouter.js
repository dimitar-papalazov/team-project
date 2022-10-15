import express from 'express'
import UserController from '../controllers/UserController.js'

const userRouter = express.Router()
const userController = new UserController()
userRouter.post('/login', (req, res) => { userController.login(req, res) })
userRouter.get('/relations', (req, res) => { userController.relations(req, res) })
userRouter.get('/', (req, res) => { userController.readAll(req, res) })
userRouter.post('/', (req, res) => { userController.create(req, res) })
userRouter.post('/addRelation', (req, res) => { userController.addRelation(req, res) })
userRouter.delete('/:id', (req, res) => { userController.delete(req, res) })
userRouter.put('/:id', (req, res) => { userController.update(req, res) })

export default userRouter