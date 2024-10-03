import { ElementsService } from "../support/services/elementsService";
import { HomeService } from "../support/services/homeService";
require('@4tw/cypress-drag-drop');

describe('template spec', () => {

  beforeEach('Ingreso a la pagina exitoso', () => {
    cy.visit('/');
    cy.Validar_pagina('https://the-internet.herokuapp.com',true);
  });

  it('Mover cuadrado A al B - Drag and drop', () => {
    HomeService.irSeccion('Drag and Drop');
    cy.Validar_pagina('drag_and_drop',true);
    ElementsService.moverCuadradoAaB();
    ElementsService.verificarIntercambio();
  });

  it('Seleccionar opcion 1 - Checkboxes', () => {
    HomeService.irSeccion('Checkboxes');
    cy.Validar_pagina('checkboxes',true);
    ElementsService.seleccionarCheck(1);
    ElementsService.validarSeleccion(1);
  });

  it('Seleccionar opcion 2 - Checkboxes', () => {
    HomeService.irSeccion('Checkboxes');
    cy.Validar_pagina('checkboxes',true);
    ElementsService.seleccionarCheck(2);
    ElementsService.validarSeleccion(2);
  });

  it('Alertar al seleccionar el cuadrado - Context Menu', () => {
    HomeService.irSeccion('Context Menu');
    cy.Validar_pagina('context_menu',true);
    ElementsService.abrirMenu();
    ElementsService.validarAlerta('You selected a context menu');
  });

  it('Ingresar usuario valido - Basic Authentication', () => {
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    cy.Validar_pagina('basic_auth',true);
    ElementsService.validarDescripcion('Congratulations! You must have the proper credentials.');
  });

  it('Recargar hasta que aparezca la galeria - Dissappearing elements', () => {
    HomeService.irSeccion('Disappearing Elements');
    cy.Validar_pagina('disappearing_elements',true);
    ElementsService.verificarCantidadBotones(5);
    ElementsService.abrirGallery();
    cy.Not_Found();
  });

  it('Seleccionar opcion 1 - Dropdown', () => {
    HomeService.irSeccion('Dropdown');
    cy.Validar_pagina('dropdown',true);
    ElementsService.seleccionarOpcion('Option 1');
  });

  it('Visualizar a Mario como primer usuario -Dynamic Content', () => {
    HomeService.irSeccion('Dynamic Content');
    cy.Validar_pagina('dynamic_content',true);
    ElementsService.hacerContenidoEstatico();
    ElementsService.validarUsuarios();
  });

})