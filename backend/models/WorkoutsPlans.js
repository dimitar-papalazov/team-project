import Model from './Model.js'

export default class WorkoutPlans extends Model {
  constructor(plan_id, workout_id) {
    super()
    this.plan_id = plan_id
    this.workout_id = workout_id
  }
}