import Model from './Model.js'

export default class Plan extends Model {
  constructor(config) {
    super()
    this.TAG = `[ Plan ]`
    this.name = config.name
    this.user_id = config.user_id
    // workouts
    // user
  }
}