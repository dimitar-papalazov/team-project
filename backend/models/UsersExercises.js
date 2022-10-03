import Model from './Model.js'

export default class UsersExercises extends Model {
  constructor(user_id, exercise_id) {
    super()
    this.user_id = user_id
    this.exercise_id = exercise_id
  }
}