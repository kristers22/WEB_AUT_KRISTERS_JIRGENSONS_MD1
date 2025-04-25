import { BasePage } from "./basePage";
 
export class SelectablePage extends BasePage {
  static get url() {
    return "selectable";
  };

  static get clickGridButton() {
    return cy.get("#demo-tab-grid")
  }

  static get clickEvenNumbers() {
    return cy.get(".list-group-item");
  }

  static get highlighted() {
    return cy.get('li.list-group-item').should('have.class', 'active');
  }

  static get notHighlighted() {
    return cy.get('li.list-group-item').not('.active');
  }
};