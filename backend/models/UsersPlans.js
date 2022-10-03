import Model from './Model.js'

export default class UsersPlans extends Model {
  constructor(plan_id, user_id) {
    super()
    this.plan_id = plan_id
    this.exercise_id = user_id
  }
}