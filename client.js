const { connect, disconnect } = require('./db')

async function run() {
  try {
    const db = await connect()

    const pizzas = db.collection('pizzas')
    const p = {
      name: 'pizza name',
      town: 'Napoli',
    }
    const result = await pizzas.insertOne(p)
    console.log('inserted new pizza')
  } finally {
    await disconnect()
  }
}
run().catch(console.dir)
