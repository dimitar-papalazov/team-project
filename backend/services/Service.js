import connection from '../database/connection.js'

export default class Service {
  constructor(table, classType, relations) {
    this.connection = connection
    this.table = table
    this.classType = classType
    this.relations = relations
    this.columnName = `${this.classType.name.toLowerCase()}_id` 
  }

  create(object) {
    return new Promise((resolve, reject) => {
      const dto = object.dto()
      let keys = Object.keys(dto)
      let values = Object.values(dto)

      if (this.relations) {
        for (let relation of this.relations) {
          for (let key of keys) {
            if (key === relation.key) {
              const index = keys.indexOf(key)
              relation.value = values[index]
              keys.splice(index)
              values.splice(index)
            }
          }
        }
      }

      this.connection.query(`insert into ${this.table} (${keys}) values (${values});`,
        (error, results) => {
          if (error) {
            return reject(error)
          }

          return this.read(results.insertId).then(result => {
            if (this.relations) {
              for (let relation of this.relations) {
                relation.service.create(new relation.classType(relation.value, result.id))
                  .then(() => {
                    result[relation.key] = relation.value
                    delete relation.value
                    return resolve(result)
                  })
                  .catch(error => {
                    this.delete(result.id)
                    return reject(error)
                  })
              }
            } else {
              return resolve(result)
            }
          })
            .catch(error => {
              return reject(error)
            })
        })
    })
  }

  read(id) {
    return new Promise(async (resolve, reject) => {
      this.connection.query(`select * from ${this.table} where id=${id}`, (error, results) => {
        if (error || !results.length) {
          return reject(error)
        }

        const result = results[0]

        if (!this.relations.length)
          return resolve(result)
        
        const id = result.id

        this.relations.forEach(relation => {
          result[relation.table] = []

          try {
              const items = await relation.service.readAllLike(this.columnName, id, relation.key)

              items.forEach(item => {
                try {
                  const r = await this.relationService.read(item)
                  result[relation.table].push(r)
                } catch (err) {
                  return reject(err)
                }
              })
          } catch (e) {
            return reject(e)
          }
        })

        return resolve(result)
      })
    })
  }

  readAll(limit = -1, offset = 0) {
    return new Promise((resolve, reject) => {
      const limitString = limit === -1 ? '' : ` limit ${limit}`
      const offsetString = limit === -1 ? '' : ` , ${offset}`
      this.connection.query(`select * from ${this.table}${limitString}${offsetString}`, (error, results) => {
        if (error || !results.length) {
          return reject(error)
        }
        return resolve(results)
      })
    })
  }

  readAllLike(property, value, select = '*') {
    return new Promise((resolve, reject) => {
      this.connection.query(`select ${select} from ${this.table} where ${property}=${value}`, (error, results) => {
        if (error || !results.length) {
          return reject(error)
        }

        return resolve(results)
      })
    })
  }

  update(id, object) {
    return new Promise((resolve, reject) => {
      let setString = ''
      const keys = Object.keys(object)

      if (this.relations) {
        for (let relation of this.relations) {
          for (let key of keys) {
            if (key === relation.key) {
              const index = keys.indexOf(key)
              relation.value = object[key]
              keys.splice(index)
            }
          }
        }
      }

      for (let key of keys) {
        const value = `${object[key]}`

        if (!keys.indexOf(key)) {
          setString += `${key} = '${value}'`
        } else {
          setString += `, ${key} = '${value}'`
        }
      }

      this.connection.query(`update ${this.table} set ${setString} where id = ${id}`, (error, result) => {
        if (error) {
          return reject(error)
        }

        if (this.relations) {
          for (let relation of this.relations) {
            if (relation.value === undefined) continue

            relation.service.create(new relation.classType(relation.value, result.id))
              .then(() => {
                result[relation.key] = relation.value
                delete relation.value
                return resolve(result)
              })
              .catch(error => {
                this.delete(result.id)
                return reject(error)
              })
          }
        } else return resolve(result)
      })
    })
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      this.connection.query(`delete from ${this.table} where id=${id}`, (error, results) => {
        if (error || !results.affectedRows) {
          return reject(error)
        }

        return resolve(results)
      })
    })
  }

  addRelation(id, relationName, relationId) {
    return new Promise((resolve, reject) => {
      const relation = !this.relations.find(r => r.key === relationName)

      if (!relation) 
        return reject('Relation does not exist')

      this.read(id)
        .then(() => {
          relation.service.create(new relation.classType(relationId, id))
            .then(result => {
              return resolve(result)
            })
            .catch(error => {
              return reject(error)
            })
        })
        .catch(() => {
          return reject('Id does not exist')
        })
    })
  }
}