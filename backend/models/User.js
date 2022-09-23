
import bcrypt from 'bcrypt'

export default class User {
  constructor(name, surname, username, email, password, height = null, weight = null, age = null) {
    this.name = name
    this.surname = surname
    this.username = username
    this.email = email
    this.password = this.hashPassword(password)
    this.height = height
    this.weight = weight
    this.age = age
  }

  hashPassword(password) {
    console.log(password)
    return bcrypt.hashSync(password, 6)
  }

  dao() { }

  dto() { 
    return {
      ...this
    }
  }

  static comparePasswords(password, hash) {
    return bcrypt.compareSync(password, hash)
  }
}