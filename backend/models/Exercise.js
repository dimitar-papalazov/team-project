import Model from './Model.js'

export default class Exercise extends Model {
  constructor(config) {
    super()
    this.TAG = `[ Exercise ]`
    this.relations = ['user_id']
    this.name = config.name
    this.sets = config.sets
    this.goal_reps = config.goal_reps // number
    this.goal_time = config.goal_time // number
    this.goal_weight = config.goal_weight // number
    this.goal_distance = config.goal_distance // number
    this.url = config.url
    this.user_id = config.user_id
  }
}