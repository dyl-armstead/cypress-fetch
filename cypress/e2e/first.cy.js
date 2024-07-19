describe('Basic Page Checks', () => {
  it('Fetch Challenge Page Loads', () => {
    cy.visit('http://sdetchallenge.fetch.com/')
  })
  it('Can enter a number in left', () => {
    cy.visit('http://sdetchallenge.fetch.com/')
    cy.get('[id="left_0"]').click().type("0")
  })
  it('Can enter a number in right', () => {
    cy.visit('http://sdetchallenge.fetch.com/')
    cy.get('[id="right_0"]').click().type("0")
  })
  it('Can reset after numbers entered in both bowls.', () => {
    cy.visit('http://sdetchallenge.fetch.com/')
    cy.get('[id="left_0"]').click().type("0")
    cy.get('[id="right_0"]').click().type("1")
    cy.get('button[id="reset"]').contains("Reset").click()
    cy.get('[id="left_0"]').invoke('attr', 'value').should('equal', '')
    cy.get('[id="right_0"]').invoke('attr', 'value').should('equal', '')
  })
  it('Can weigh numbers entered in both bowls.', () => {
    cy.visit('http://sdetchallenge.fetch.com/')
    cy.get('[id="left_0"]').click().type("0")
    cy.get('[id="right_0"]').click().type("1")
    cy.get('button[id="weigh"]').contains("Weigh").click()
    cy.get('[class=game-info]').find('li').should('exist')
  })
})