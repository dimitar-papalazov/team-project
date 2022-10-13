
import bcrypt from 'bcrypt'
import Model from './Model.js'

export default class User extends Model {
  constructor(config) {
    super()
    this.TAG = `[ User ]`
    this.name = config.name
    this.email = config.email
    this.password = User.hashPassword(config.password)
    this.height = config.height === undefined ? null : config.height
    this.weight = config.weight === undefined ? null : config.weight
    this.age = config.age === undefined ? null : config.age
    // custom exercises
    // workouts
    // plans
  }

  // mozi ke treba dao

  dto() {
    return {
      name: `'${this.name}'`,
      password: `'${this.password}'`,
      email: `'${this.email}'`,
      height: this.height === null ? 'NULL' : this.height.toString(),
      weight: this.weight === null ? 'NULL' : this.weight.toString(),
      age: this.age === null ? 'NULL' : this.age.toString(),  
    }
  }

  static hashPassword(password) {
    return bcrypt.hashSync(password, 6)
  }

  static comparePasswords(password, hash) {
    return bcrypt.compareSync(password, hash)
  }
}