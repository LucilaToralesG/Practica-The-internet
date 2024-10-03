import { ElementsPage } from "../pages/elementsPages";

class elementsService {
    moverCuadradoAaB(){
        const dataTransfer = new DataTransfer();
        ElementsPage.getASquare().trigger('dragstart', { dataTransfer });
        ElementsPage.getBSquare().trigger('drop', { dataTransfer });
        ElementsPage.getASquare().trigger('dragend');
    };

    verificarIntercambio(){
        ElementsPage.getASquare().should('not.have.text','A');
        ElementsPage.getBSquare().should('have.text','A');
    };

    seleccionarCheck1(opcion){
        ElementsPage.getCheckboxes().uncheck();
        ElementsPage.getOneCheckbox().check();
        
    }

    validarSeleccion(opcion){
        if (opcion == 1) {
            ElementsPage.getOneCheckbox().should('be.checked').and('have.text','checkbox 1');
            ElementsPage.getTwoCheckbox().should('not.be.checked').and('have.value',' checkbox 2');
        }else{
            ElementsPage.getTwoCheckbox().should('be.checked').and('have.value',' checkbox 1');
            ElementsPage.getOneCheckbox().should('not.be.checked').and('have.value',' checkbox 2');
        }
    };

    abrirMenu(texto){
        ElementsPage.getBoxAlert().rightclick();
    }

    abrirGallery(){
        ElementsPage.getGalleryBtm().should('be.visible').click();
    }

    hacerContenidoEstatico(){
        ElementsPage.getStaticBtm().should('be.visible').click();
        cy.reload();
    }

    validarUsuarios(){
        ElementsPage.getUserList().should('be.visible').children().first().children().first().and('contain','img')
    }


    seleccionarOpcion(opcion){
        ElementsPage.getDropdown().should('be.visible').and('contain','Please select an option');
        ElementsPage.getDropdown().select(opcion).should('be.enabled');
        ElementsPage.getDropdown().should('contain',opcion);
        ElementsPage.getDropdown().contains('Please select an option').should('be.disabled');
    }

    validarAlerta(texto){
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal(texto);
        });
    }

    validarDescripcion(texto){
        ElementsPage.getDescription().should('be.visible').and('contain',texto);
    }

    verificarCantidadBotones(cant){
        ElementsPage.getDisappearingBtms().then(($buttons) => {
            cy.log('Cantidad de botones:', $buttons.length);
            if($buttons.length < cant) {
                cy.reload();
                this.verificarCantidadBotones(cant);
            }
        });
    }
}
export const ElementsService = new elementsService();