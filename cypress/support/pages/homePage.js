class homePage {

    dragDropBtm = ':nth-child(10) > a';
    checkboxBtm = ':nth-child(6) > a';
    contextMenuBtm = ':nth-child(7) > a';
    digestAuth = ':nth-child(8) > a';
    listExamples = 'ul';

    getListExamples(){
        return cy.get(this.listExamples);
    }

    getDigestAuth(){
        return cy.get(this.digestAuth);
    }

    getDragDropBtm(){
        return cy.get(this.dragDropBtm);
    }

    getCheckboxBtm(){
        return cy.get(this.checkboxBtm);
    }

    getContextMenuBtm(){
        return cy.get(this.contextMenuBtm);
    }
    
}
export const HomePage = new homePage();