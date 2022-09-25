import connection from '../database/connection.js'
import User from '../models/User.js'

export default class UserService {
  constructor() {
    this.connection = connection
    this.TAG = `[ UserService ]`
  }

  createUser(user) {
    return new Promise((resolve, reject) => {
      const dto = user.dto()
      this.connection.query(`INSERT INTO users (id, name, surname, username, email, password, height, weight, age) VALUES (NULL, '${dto.name}', '${dto.surname}', '${dto.username}', '${dto.email}', '${dto.password}', '${dto.height}', '${dto.weight}', '${dto.age}');`,
        (error, results) => {
          if (error) {
            return reject(error)
          }

          return this.readUser(results.insertId).then(result => resolve(result)).catch(error => reject(error))
        })
    })
  }

  readUser(userId) {
    return new Promise((resolve, reject) => {
      this.connection.query(`select * from users where id=${userId}`, (error, results) => {
        if (error || !results.length) {
          return reject(error)
        }

        return resolve(new User(results[0]).dao())
      })
    })
  }

  deleteUser(userId) {
    return new Promise((resolve, reject) => {
      this.connection.query(`delete from users where id=${userId}`, (error, results) => {        
        if (error || !results.affectedRows) {
          return reject(error)
        }

        return resolve(results)
      })
    })
  }

  // readAll ova da bidi so limit?
  // update
}