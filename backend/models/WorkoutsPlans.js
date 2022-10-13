import Model from './Model.js'

export default class WorkoutPlans extends Model {
  constructor(workout_id, plan_id) {
    super()
    this.plan_id = plan_id
    this.workout_id = workout_id
  }
}