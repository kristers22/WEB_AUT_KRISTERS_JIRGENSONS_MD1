import { SelectablePage } from "../../pageObjects/selectablePage"

describe("MD1", () => {
  context("By Kristers Jirgensons", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it("Selectable tests", () => {

      // Click “Grid”
      SelectablePage.clickGridButton.click();
      
      // Click - “Two”, “Four”, “Six”, “Eight”
      SelectablePage.clickEvenNumbers.contains("Two").click();
      SelectablePage.clickEvenNumbers.contains("Four").click();
      SelectablePage.clickEvenNumbers.contains("Six").click();
      SelectablePage.clickEvenNumbers.contains("Eight").click();


      // Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
      SelectablePage.highlighted.should("contain.text", "Two");
      SelectablePage.highlighted.should("contain.text", "Four");
      SelectablePage.highlighted.should("contain.text", "Six");
      SelectablePage.highlighted.should("contain.text", "Eight");

      // Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted

      SelectablePage.notHighlighted.should("contain.text", "One");
      SelectablePage.notHighlighted.should("contain.text", "Three");
      SelectablePage.notHighlighted.should("contain.text", "Five");
      SelectablePage.notHighlighted.should("contain.text", "Seven");
      SelectablePage.notHighlighted.should("contain.text", "Nine");

    });

  });
});