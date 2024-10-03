class elementsPage {

    aSquare = '#column-a';
    bSquare = '#column-b';
    oneCheckbox ='#checkboxes > :nth-child(1)';
    twoCheckbox ='#checkboxes > :nth-child(3)';
    checkboxes = 'input[type = "checkbox"]';
    boxAlert = '#hot-spot';
    description = 'p';
    galleryBtm = ':nth-child(5) > a';
    disappearingBtms = 'li > a';
    dropdown = '#dropdown';
    staticBtm = ':nth-child(3) > a';
    userList = ':nth-child(7) > #content';
    userImg = ':nth-child(1) > .large-2 > img';


    getCheckboxes(){
        return cy.get(this.checkboxes);
    }

    getUserImg(){
        return cy.get(this.userImg);
    }

    getUserList(){
        return cy.get(this.userList);
    }

    getStaticBtm(){
        return cy.get(this.staticBtm);
    }

    getDropdown(){
        return cy.get(this.dropdown);
    }

    getDisappearingBtms(){
        return cy.get(this.disappearingBtms);
    }


    getGalleryBtm(){
        return cy.get(this.galleryBtm);
    }

    getDescription(){
        return cy.get(this.description);
    }

    getBoxAlert(){
        return cy.get(this.boxAlert);
    }

    getOneCheckbox(){
        return cy.get(this.oneCheckbox);
    }

    getTwoCheckbox(){
        return cy.get(this.twoCheckbox);
    }

    getASquare(){
        return cy.get(this.aSquare);
    }

    getBSquare(){
        return cy.get(this.bSquare);
    }
    
} 
export const ElementsPage = new elementsPage();