
import bcrypt from 'bcrypt'

export default class User {
  constructor(config) {
    this.id = config.id === undefined ? null : config.id
    this.name = config.name
    this.surname = config.surname
    this.username = config.username
    this.email = config.email
    this.password = this.hashPassword(config.password)
    this.height = config.height === undefined ? null : config.height
    this.weight = config.weight === undefined ? null : config.weight
    this.age = config.age === undefined ? null : config.age
  }

  hashPassword(password) {
    return bcrypt.hashSync(password, 6)
  }

  dao() {
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      username: this.username,
      email: this.email,
      height: this.height,
      weight: this.weight,
      age: this.age,      
    }
  }

  dto() {
    return {
      ...this
    }
  }

  static comparePasswords(password, hash) {
    return bcrypt.compareSync(password, hash)
  }
}