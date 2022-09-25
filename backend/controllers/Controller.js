export default class Controller {
  constructor(service, classType) {
    this.service = service
    this.classType = classType
  }

  create(request, response) {
    const object = new this.classType(request.body)
    this.service.create(object)
      .then(result => { response.status(201).send({ ...result }) })
      .catch(error => { response.status(400).send({ message: error }) })
  }

  read(request, response) {
    const { id } = request.params
    this.service.read(id)
      .then(result => { response.status(200).send(result) })
      .catch(error => { response.status(404).send({ message: error === null ? 'Not found' : error }) })
  }

  readAll(request, response) {
    const { limit, offset } = request.query
    this.service.readAll(limit, offset)
      .then(result => { response.status(200).send(result) })
      .catch(error => { response.status(404).send({ message: error === null ? 'Not found' : error }) })
  }

  update(request, response) {
    const { id } = request.params
    const updates = request.query
    this.service.update(id, updates)
      .then(() => { response.status(204).send({ message: `Column with ${id} updated!` }) })
      .catch(error => { response.status(404).send({ message: error === null ? 'Not found' : error }) })
  }

  delete(request, response) {
    const { id } = request.params
    this.service.delete(id)
      .then(() => { response.status(200).send({ message: `Column with ${id} deleted!` }) })
      .catch(error => { response.status(404).send({ message: error === null ? 'Not found' : error }) })
  }
}