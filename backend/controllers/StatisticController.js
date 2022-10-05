import StatisticService from '../services/StatisticService.js'

export default class StatisticController {
  constructor() {
    this.service = new StatisticService()
  }

  getProgress(request, response) {
    const { exercise_id } = request.params
    this.service.getProgress(exercise_id)
      .then(result => { response.status(200).send({ ...result }) })
      .catch(error => { response.status(404).send({ message: error }) })
  }
}