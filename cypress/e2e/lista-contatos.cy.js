describe("Testar a adição, edição e remoção de contato", () => {
  it('Teste do botão adicionar', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/')
      cy.get('.sc-iAEyYk > :nth-child(1)').first().should('exist');

      
      cy.get('input[placeholder="Nome"]').type("Nome1")
      cy.get('input[placeholder="E-mail"]').type("email@email.com")
      cy.get('input[placeholder="Telefone"]').type("00000001")
      cy.get('.adicionar').click()

      cy.get('.sc-iAEyYk > :nth-child(2)')
      // Verifique se o novo contato foi adicionado corretamente.
      cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('exist')
      cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)').should('exist')
      cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)').should('exist')
  })

  it('Teste do botão editar', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/')
      // Selecione o botão de edição do primeiro contato (por exemplo, o índice 0).
      cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()

      // Insira novos valores nos campos de input (suponhamos que você queira editar o contato).
      cy.get('input[placeholder="Nome"]').clear().type("NovoNome")
      cy.get('input[placeholder="E-mail"]').clear().type("novo@email.com")
      cy.get('input[placeholder="Telefone"]').clear().type("12345678")

      // Clique no botão para salvar as alterações.
      cy.get('.alterar').click()

      // Verifique se as alterações foram salvas corretamente.
      //Nessa parte
      cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('contain', 'NovoNome')
      cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)').should('contain', '12345678')
      cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)').should('contain', 'novo@email.com')
  })

  it('Teste do botão remover', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    // Obtenha o número de contatos antes da remoção.
    
    cy.get('.contato').its('length').then((initialLength) => {
      cy.get(':nth-child(2) > .sc-gueYoa > .delete').click();
    // Verifique se o número de contatos foi reduzido em 1 após a remoção.
      cy.get('.contato').should('have.length', initialLength - 1);
    });

})
})
