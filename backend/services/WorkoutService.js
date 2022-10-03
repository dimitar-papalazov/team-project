import Service from './Service.js'
import Workout from '../models/Workout.js'
import UsersWorkoutsService from './UsersWorkoutsService.js'
import WorkoutPlans from '../models/WorkoutsPlans.js'
import UsersWorkouts from '../models/UsersWorkouts.js'

export default class WorkoutService extends Service {
  constructor() {
    const relations = [
      { 
        classType: UsersWorkouts, 
        key: 'user_id', 
        service: new UsersWorkoutsService()
      },
      { 
        classType: WorkoutPlans, 
        key: 'plan_id', 
        service: new WorkoutPlans()
      }
    ]

    super('workouts', Workout, relations)
    this.TAG = `[ WorkoutService ]`
  }
}