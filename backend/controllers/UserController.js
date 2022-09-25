import User from '../models/User.js'
import UserService from '../services/UserService.js'
import Controller from './Controller.js'

export default class UserController extends Controller {
  constructor() {
    super(new UserService(), User)
    this.TAG = `[ UserController ]`
  }
}