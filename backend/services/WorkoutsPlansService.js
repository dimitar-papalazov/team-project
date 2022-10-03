import Service from './Service.js';
import WorkoutsPlans from '../models/WorkoutsPlans.js'

export default class WorkoutsPlansService extends Service {
  constructor() {
    super('workouts_plans', WorkoutsPlans)
  }
}