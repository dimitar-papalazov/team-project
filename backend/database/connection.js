import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'team_project'
})

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting to database: ${err.stack}`)
    return
  }

  console.log(`Connected to database`)
})

export default connection