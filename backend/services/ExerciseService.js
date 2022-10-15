import Service from './Service.js'
import Exercise from '../models/Exercise.js'
import UsersExercises from '../models/UsersExercises.js'
import ExercisesWorkouts from '../models/ExercisesWorkouts.js'
import UserService from './UserService.js'
import ExerciseService from './ExerciseService.js'
import UsersExercisesService from './UsersExercisesService.js'
import ExercisesWorkoutsService from './ExercisesWorkoutsService.js'

export default class ExerciseService extends Service {
  constructor() {
    const relations = [
      { 
        classType: UsersExercises, 
        key: 'user_id', 
        service: new UsersExercisesService(),
        table: 'users',
        relationService: new UserService()
      },
      { 
        classType: ExercisesWorkouts, 
        key: 'workout_id', 
        service: new ExercisesWorkoutsService(),
        table: 'workouts',
        relationService: new ExerciseService()
      }
    ]

    super('exercises', Exercise, relations)
    this.TAG = `[ ExerciseService ]`
  }
}