import Model from './Model.js'

export default class Workout extends Model {
  constructor(name, exercises, user) {
    super()
    this.TAG = `[ Workout ]`
    this.name = name
    // exercises
    // user
  }
}