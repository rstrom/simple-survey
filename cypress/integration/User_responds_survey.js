describe("User experience of responding to survey", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("The survey consists of multiple pages", () => {});

  it("1. one question w/ a Text input field", () => {});

  it("2. one queastion w/ a Dropdown (several options, one selectable)", () => {});

  it("3. one queastion w/ Radio buttons (multiple inputs, one selectable)", () => {});

  it("Each page has one back button (if not on the first page & disabled if w/o input)", () => {});

  it("Each page has one next button (if not on summary & disabled if w/o input)", () => {});

  it("When finished, the last page shows a summary of questions with answers", () => {});

  it("When closing the browser window and reopening it, the progress with it’s data is restored", () => {});

  it("The survey can be browsed using the native browser back / next button", () => {});
});
