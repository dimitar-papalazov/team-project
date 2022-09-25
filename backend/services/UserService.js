import User from '../models/User.js'
import Service from './Service.js'

export default class UserService extends Service {
  constructor() {
    super('users', User)
    this.TAG = `[ UserService ]`
  }

  update(id, object) {
    if (object.password !== undefined) {
      object.password = User.hashPassword(object.password)
    }

    return super.update(id, object)
  }
}