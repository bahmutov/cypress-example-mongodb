/// <reference types="cypress" />

const { connect, disconnect } = require('../../db')

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = async (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

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
