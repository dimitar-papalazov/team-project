import User from '../models/User.js'
import Service from './Service.js'

export default class UserService extends Service {
  constructor() {
    super('users', User)
    this.TAG = `[ UserService ]`
  }

  login(username, password) {
    return new Promise((resolve, reject) => {
      this.connection.query(`select * from ${this.table} where username='${username}'`, (error, results) => {
        const samePassword = User.comparePasswords(password, results[0].password)

        if (error || !results.length || !samePassword) {
          return reject(error)
        }

        return resolve(results[0])
      })
    })
  }

  update(id, object) {
    if (object.password !== undefined) {
      object.password = User.hashPassword(object.password)
    }

    return super.update(id, object)
  }
}