/// <reference types="cypress" />

describe('Pizzas', () => {
  before(() => {
    cy.task('clearPizzas')
  })

  it('shows an empty list initially', () => {
    // https://on.cypress.io/request
    cy.request('/pizza').its('body').should('deep.equal', [])
  })

  it('adds pizzas', () => {
    cy.request('POST', '/pizza', {
      name: 'Margherita',
      ingredients: ['tomatoes', 'mozzarella'],
    })
    cy.request('/pizza')
      .its('body')
      .should('have.length', 1)
      .its(0)
      .should('have.property', 'name', 'Margherita')
  })

  // bad practice: assume this test runs after the previous test
  it('adds vegan pizza', () => {
    cy.request('POST', '/pizza', {
      name: 'Vegan',
      ingredients: ['Roma tomatoes', 'bell peppers'],
    })
    cy.request('/pizza')
      .its('body')
      .should('have.length', 2)
      .its(1)
      // ignore "_id" property
      .should('include.keys', ['name', 'ingredients'])
      .and('deep.include', {
        name: 'Vegan',
        ingredients: ['Roma tomatoes', 'bell peppers'],
      })
  })
})
