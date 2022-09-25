import Service from './Service.js'
import Progress from '../models/Progress.js'

export default class ProgressService extends Service {
  constructor() {
    super('progresses', Progress)
    this.TAG = `[ ProgressService ]`
  }
}