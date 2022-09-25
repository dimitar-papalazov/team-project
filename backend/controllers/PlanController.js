import Plan from '../models/Plan.js'
import PlanService from '../services/PlanService.js'
import Controller from './Controller.js'

export default class PlanController extends Controller {
  constructor() {
    super(new PlanService(), Plan)
    this.TAG = `[ PlanController ]`
  }
}