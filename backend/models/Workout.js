import Model from './Model.js'

export default class Workout extends Model {
  constructor(config) {
    super()
    this.TAG = `[ Workout ]`
    this.name = config.name
    this.user_id = config.user_id
    this.plan_id = config.plan_id
    // exercises
    // user
  }
}