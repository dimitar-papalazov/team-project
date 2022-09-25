import express from 'express'
import userRouter from './routes/userRouter.js'
import exerciseRouter from './routes/exerciseRouter.js'
import planRouter from './routes/planRouter.js'
import progressRouter from './routes/progressRouter.js'
import workoutRouter from './routes/workoutRouter.js'

const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => { 
  console.log(`Server started at http://localhost:${port}`)
  app.use('/users', userRouter)
  app.use('/exercises', exerciseRouter)
  app.use('/plans', planRouter)
  app.use('/progresses', progressRouter)
  app.use('/workouts', workoutRouter)
 })