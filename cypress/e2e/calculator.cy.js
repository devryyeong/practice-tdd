const clickDigitButtons = (digits = []) => {
  digits.forEach((digit) => {
    cy.get(".digit").contains(digit).click();
  });
};

const clickOperationButton = (operation) => {
  cy.get(".operation").contains(operation).click();
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
    // cy.get("#total").should("have.text", 1);

    clickDigitButtons(["1"]);
    checkDisplayValue(1);
  });

  it("2개의 숫자 버튼을 클릭하면 디스플레이에 숫자가 표시됨", () => {
    clickDigitButtons(["1", "2"]);
    checkDisplayValue(12);
  });

  it("3개의 숫자 버튼을 클릭하면 디스플레이에 숫자가 표시됨", () => {
    clickDigitButtons(["1", "2", "3"]);
    checkDisplayValue(123);
  });

  it("연산자 버튼을 클릭하면 디스플레이에 연산자가 표시됨", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButton("+");
    checkDisplayValue("123+");
  });

  xit("연산자 버튼을 여러 번 누르면 디스플레이에 마지막 연산자만 표시됨", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButton("+");
    clickOperationButton("-");
    checkDisplayValue("123-");
  });

  xit("2번째 숫자를 입력하면 디스플레이에 2번째 숫자가 누적되어 표시됨", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButton("+");
    cclickDigitButtons(["4", "5", "6"]);
    checkDisplayValue("123+456");
  })

  xit("덧셈: 123+456을 클릭하고 '='버튼을 클릭하면 디스플레이에 연산의 결과값이 표시됨", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButton("+");
    cclickDigitButtons(["4", "5", "6"]);
    clickOperationButton("=");
    checkDisplayValue("579");
  });

  xit("뻴셈: 123-456을 클릭하고 '='버튼을 클릭하면 디스플레이에 연산의 결과값이 표시됨", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButton("-");
    cclickDigitButtons(["4", "5", "6"]);
    clickOperationButton("=");
    checkDisplayValue("-333");
  });

  xit("곱셈: 123X456을 클릭하고 '='버튼을 클릭하면 디스플레이에 연산의 결과값이 표시됨", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButton("X");
    cclickDigitButtons(["4", "5", "6"]);
    clickOperationButton("=");
    checkDisplayValue("56088");
  });

  xit("나눗셈: 123/456을 클릭하고 '='버튼을 클릭하면 디스플레이에 연산의 결과값이 표시됨", () => {
    clickDigitButtons(["1", "2", "3"]);
    clickOperationButton("/");
    cclickDigitButtons(["4", "5", "6"]);
    clickOperationButton("=");
    checkDisplayValue("0");
  });

  xit("AC버튼을 클릭하면 디스플레이의 값이 0으로 표시됨", () => {
    clickDigitButtons(["1", "2", "3"]);
    cy.get(".modifier").click();
    checkDisplayValue("0");
  })
});
