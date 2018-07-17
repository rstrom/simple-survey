describe("User experience of responding to survey", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("The survey consists of multiple pages", () => {
    cy.visit("/page/1");
    cy.visit("/page/2");
  });

  it("1. one question w/ a Text input field", () => {
    cy.visit("/page/1");
    cy.get('input[type="text"]');
  });

  it("2. one question w/ a Dropdown (several options, one selectable)", () => {
    cy.visit("/page/2");
    cy.get("option").should("have.length.above", 1);
  });

  it("3. one question w/ Radio buttons (multiple inputs, one selectable)", () => {
    cy.visit("/page/3");
    cy.get('input[type="radio"]').should("have.length.above", 1);
  });

  it("Each page has one back button (if not on the first page & disabled if w/o input)", () => {
    cy.visit("/page/1");
    cy.get("button.back").should("have.attr", "disabled");
    cy.get("input").type("Satoshi");
    cy.get("button.back").should("not.have.attr", "disabled");
    cy.get("button.back").click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/");
    });
  });

  it("Each page has one next button (if not on summary & disabled if w/o input)", () => {
    cy.visit("/page/1");
    cy.get("button.next").should("have.attr", "disabled");
    cy.get("input").type("Satoshi");
    cy.get("button.next").should("not.have.attr", "disabled");
    cy.get("button.next").click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/page/2");
    });
  });

  it("When finished, the last page shows a summary of questions with answers", () => {});

  it("When closing the browser window and reopening it, the progress with it’s data is restored", () => {});

  it("The survey can be browsed using the native browser back / next button", () => {});
});
