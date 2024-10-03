import { ElementsService } from "../support/services/elementsService";
import { HomeService } from "../support/services/homeService";
require('@4tw/cypress-drag-drop');

describe('template spec', () => {
  before(() => {
    cy.visit('/');
  });

  beforeEach('Ingreso a la pagina exitoso', () => {
    cy.Validar_pagina('https://the-internet.herokuapp.com',true);
  });

  it('Drag and drop', () => {
    HomeService.irSeccion('Drag and Drop');
    cy.Validar_pagina('drag_and_drop',true);
    ElementsService.moverCuadradoAaB();
    ElementsService.verificarIntercambio();
  });

  it('checkboxes', () => {
    HomeService.irSeccion('Checkboxes');
    cy.Validar_pagina('checkboxes',true);
    ElementsService.seleccionarCheck1();
    ElementsService.validarSeleccion(1);
  });

  it('context Menu', () => {
    HomeService.irSeccion('Context Menu');
    cy.Validar_pagina('context_menu',true);
    ElementsService.abrirMenu();
    ElementsService.validarAlerta('You selected a context menu');
  });

  it('digest Authentication', () => {
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    cy.Validar_pagina('basic_auth',true);
    ElementsService.validarDescripcion('Congratulations! You must have the proper credentials.');
  });

  it('Dissappearing elements', () => {
    HomeService.irSeccion('Disappearing Elements');
    cy.Validar_pagina('disappearing_elements',true);
    ElementsService.verificarCantidadBotones(5);
    ElementsService.abrirGallery();
    cy.Not_Found();
  });

  it('Dropdown', () => {
    HomeService.irSeccion('Dropdown');
    cy.Validar_pagina('dropdown',true);
    ElementsService.seleccionarOpcion('Option 1');
  });

  it.only('Dynamic Content', () => {
    HomeService.irSeccion('Dynamic Content');
    cy.Validar_pagina('dynamic_content',true);
    ElementsService.hacerContenidoEstatico();
    ElementsService.validarUsuarios();
  });

})