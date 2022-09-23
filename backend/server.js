import express from 'express'
import userRouter from './routes/userRouter.js'

const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => { 
  console.log(`Server started at http://localhost:${port}`)
  app.use('/users', userRouter)
 })