const { connect } = require('./db')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json()) // for parsing application/json

let db
let pizzas

app.get('/pizza', async (req, res) => {
  console.log('getting pizza list')

  if (!pizzas) {
    pizzas = db.collection('pizzas')
  }

  const cursor = pizzas.find()
  const count = await cursor.count()
  if (count === 0) {
    console.log('No pizzas found!')
    return res.json([])
  }

  console.log('Found %d', count)
  const list = await cursor.toArray()
  res.json(list)
})

app.post('/pizza', async (req, res) => {
  console.log('POST pizza', req.body)

  if (!pizzas) {
    pizzas = db.collection('pizzas')
  }

  const result = await pizzas.insertOne(req.body)
  console.log('inserted %s', result.insertedId)
  res.json({ _id: result.insertedId })
})

async function initServer() {
  db = await connect()

  const PORT = process.env.PORT || 8080
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
  })

  // TODO implement disconnect on quit signal
}

initServer().catch(console.dir)
