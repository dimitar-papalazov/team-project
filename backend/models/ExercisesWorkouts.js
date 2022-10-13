import Model from './Model.js'

export default class ExercisesWorkouts extends Model {
  constructor(exercise_id, workout_id) {
    super()
    this.workout_id = workout_id
    this.exercise_id = exercise_id
  }
}