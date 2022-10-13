import User from '../models/User.js'
import UserService from '../services/UserService.js'
import Controller from './Controller.js'

export default class UserController extends Controller {
  constructor() {
    super(new UserService(), User)
    this.TAG = `[ UserController ]`
  }

  login(request, response) {
    const { email, password } = request.body
    this.service.login(email, password)
      .then(result => { response.status(200).send(result) })
      .catch(error => { response.status(404).send({ message: error === null ? 'Not found' : error }) })
  }
}