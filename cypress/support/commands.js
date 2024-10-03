require('@4tw/cypress-drag-drop')

Cypress.Commands.add('Validar_pagina', (url, contain) => {
    if (contain) {
        cy.url().should('include', url);
        cy.log('La pagina cargo correctamente');
    }else{
        cy.url().should('not.include', url);
        cy.log('La pagina ha cambiado');
    }
});

Cypress.Commands.add('Not_Found', () => {
    cy.get('h1').then((element) => {
    expect(element).contain('Not Found');
    });
});
