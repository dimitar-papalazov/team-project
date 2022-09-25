import Progress from '../models/Progress.js'
import ProgressService from '../services/ProgressService.js'
import Controller from './Controller.js'

export default class ProgressController extends Controller {
  constructor() {
    super(new ProgressService(), Progress)
    this.TAG = `[ ProgressController ]`
  }
}