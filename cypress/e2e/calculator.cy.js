const clickDigitButtons = (digits = []) => {
  digits.forEach((digit) => {
    cy.get(".digit").contains(digit).click();
  });
};

const checkDisplayValue = (value) => {
  cy.get("#total").should("have.text", value);
};

describe("calculator test", () => {
  beforeEach("페이지 방문", () => {
    cy.visit("../../index.html");
  });

  it("디스플레이에 기본값으로 0 표시", () => {
    // cy.get("#total").should("have.text", 0);
    checkDisplayValue(0);
  });

  // known to unknown: 점진적으로
  it("1개의 숫자 버튼을 클릭하면 디스플레이에 숫자가 표시됨", () => {
    // cy.get(".digit").contains("1").click();
    clickDigitButtons(["1"]);

    // cy.get("#total").should("have.text", 1);
    checkDisplayValue(1);
  });

  it("2개의 숫자 버튼을 클릭하면 디스플레이에 숫자가 표시됨", () => {
    // cy.get(".digit").contains("1").click();
    // cy.get(".digit").contains("2").click();

    clickDigitButtons(["1", "2"]);
    checkDisplayValue(12);
  });

  it("3개의 숫자 버튼을 클릭하면 디스플레이에 숫자가 표시됨", () => {
    // cy.get(".digit").contains("1").click();
    // cy.get(".digit").contains("2").click();
    // cy.get(".digit").contains("3").click();

    clickDigitButtons(["1", "2", "3"]);
    checkDisplayValue(123);
  });

  it("연산자 버튼을 클릭하면 디스플레이에 연산자가 표시됨", () => {
    //
  });

  it("연산자 버튼을 여러 번 누르면 디스플레이에 마지막 연산자만 표시됨", () => {
    //
  });

  it("123+456을 클릭하고 '='버튼을 클릭하면 디스플레이에 연산의 결과값이 표시됨", () => {
    //
  });
});
