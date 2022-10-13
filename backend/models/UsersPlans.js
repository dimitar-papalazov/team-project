import Model from './Model.js'

export default class UsersPlans extends Model {
  constructor(user_id, plan_id) {
    super()
    this.plan_id = plan_id
    this.user_id = user_id
  }
}