/// <reference types="cypress" />

const { connect } = require('../../db')

module.exports = async (on, config) => {
  const db = await connect()
  const pizzas = db.collection('pizzas')

  on('task', {
    async clearPizzas() {
      console.log('clear pizzas')
      await pizzas.remove({})

      return null
    },
  })
}
