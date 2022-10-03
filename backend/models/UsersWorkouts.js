import Model from './Model.js'

export default class UsersWorkouts extends Model {
  constructor(user_id, workout_id) {
    super()
    this.user_id = user_id
    this.workout_id = workout_id
  }
}