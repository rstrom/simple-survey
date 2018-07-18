describe("User experience of responding to survey", () => {
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
    cy.get("button.back").click({ force: true });
    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/simple-survey/");
    });
  });

  it("Each page has one next button (if not on summary & disabled if w/o input)", () => {
    cy.visit("/page/1");
    cy.get("button.next").should("have.attr", "disabled");
    cy.get("input").type("Satoshi");
    cy.get("button.next").should("not.have.attr", "disabled");
    cy.get("button.next").click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/simple-survey/page/2");
    });
  });

  it("When finished, the last page shows a summary of questions with answers", () => {
    cy.visit("/page/1");
    cy.get("input").type("Satoshi");
    cy.get("button.next").click();
    cy.get("select").select("Asia");
    cy.get("button.next").click();
    cy.get("label")
      .contains("Red")
      .click();
    cy.get("button.next").click();
    cy.get(".summary").contains("Satoshi");
    cy.get(".summary").contains("Asia");
    cy.get(".summary").contains("Red");
  });

  it("When closing the browser window and reopening it, the progress with it’s data is restored", () => {
    cy.visit("/page/1");
    cy.get("input").type("Satoshi");
    cy.reload();
    cy.get("input").should("have.value", "Satoshi");
  });

  it("The survey can be browsed using the native browser back / next button", () => {
    cy.visit("/");
    cy.get("a")
      .contains("Start")
      .click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/simple-survey/page/1");
    });
    cy.go("back");
    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/simple-survey/");
    });
    cy.go("forward");
    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/simple-survey/page/1");
    });
  });
});
