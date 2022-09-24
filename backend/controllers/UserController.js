import User from '../models/User.js'
import UserService from '../services/UserService.js'

export default class UserController {
  constructor() { }

  static createUser(request, response) {
    const { name, surname, username, email, password, height, weight, age } = request.body
    const user = new User(name, surname, username, email, password, height, weight, age)
    UserService.createUser(user)
      .then((result) => { response.status(201).send({ ...result }) })
      .catch((error) => { response.status(400).send({ message: error }) })
  }

  static getUser(request, response) {
    const { id } = request.params
    UserService.readUser(id)
      .then((result) => { response.status(200).send(result) })
      .catch((error) => { response.status(404).send({ message: 'not found' }) })
  }
}