import Service from './Service.js'
import Exercise from '../models/Exercise.js'
import UsersExercisesService from './UsersExercisesService.js'
import UsersExercises from '../models/UsersExercises.js'
import ExercisesWorkouts from '../models/ExercisesWorkouts.js'
import ExercisesWorkoutsService from './ExercisesWorkoutsService.js'

export default class ExerciseService extends Service {
  constructor() {
    const relations = [
      { 
        classType: UsersExercises, 
        key: 'user_id', 
        service: new UsersExercisesService()
      },
      { 
        classType: ExercisesWorkouts, 
        key: 'workout_id', 
        service: new ExercisesWorkoutsService()
      }
    ]

    super('exercises', Exercise, relations)
    this.TAG = `[ ExerciseService ]`
  }
}