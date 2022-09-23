import connection from '../database/connection.js'

export default class UserService {
  constructor() { }

  static TAG = `[ UserService ]`

  static createUser(user) {
    return new Promise((resolve, reject) => {
      const dto = user.dto()
      connection.query(`INSERT INTO users (id, name, surname, username, email, password, height, weight, age) VALUES (NULL, '${dto.name}', '${dto.surname}', '${dto.username}', '${dto.email}', '${dto.password}', '${dto.height}', '${dto.weight}', '${dto.age}');`,
        (error, results) => {
          console.log(UserService.TAG, `createUser(${user})`, error, results)
  
          if (error) {
            return reject(error)
          }
  
          return UserService.readUser(results.insertId).then(result => resolve(result)).catch(error => reject(error))
        })
    }) 
  }

  static readUser(userId) {
    return new Promise((resolve, reject) => {
      connection.query(`select * from users where id=${userId}`, (error, results) => {
        console.log(UserService.TAG, `readUser(${userId})`, error, results)

        if (error || !results.length) {
          return reject(error)
        }

        return resolve(results[0])
      })
    }) 
  }
}