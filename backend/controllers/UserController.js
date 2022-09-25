import User from '../models/User.js'
import UserService from '../services/UserService.js'

export default class UserController {
  constructor() {
    this.userService = new UserService()
  }

  createUser(request, response) {
    const { name, surname, username, email, password, height, weight, age } = request.body
    console.log(request.body)
    const user = new User(request.body)
    this.userService.createUser(user)
      .then((result) => { response.status(201).send({ ...result }) })
      .catch((error) => { response.status(400).send({ message: error }) })
  }

  readUser(request, response) {
    const { id } = request.params
    this.userService.readUser(id)
      .then((result) => { response.status(200).send(result) })
      .catch((error) => { response.status(404).send({ message: error === null ? 'Not found' : error }) })
  }

  deleteUser(request, response) {
    const { id } = request.params
    this.userService.deleteUser(id)
    .then((result) => { response.status(200).send(result) })
    .catch((error) => { response.status(404).send({ message: error === null ? 'Not found' : error }) })
  }
}