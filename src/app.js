// src/app.js
const express = require("express");
// math.js에서 4개의 함수 모두 불러오기
const { add, subtract, multiply, divide } = require("./math"); 
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Express App!");
});

app.get("/hello", (req, res) => {
  const name = req.query.name || "Guest";
  res.send(`Hello ${name}`);
});

app.get("/calculator", (req, res) => {
  const operation = req.query.operation;
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res
      .status(400)
      .send("Error: Please provide valid numbers for num1 and num2.");
  }

  let result;

  // 불러온 수학 함수들을 각 조건에 맞게 적용합니다.
  if (operation === "add") {
    result = add(num1, num2);
  } else if (operation === "subtract") {
    result = subtract(num1, num2);
  } else if (operation === "multiply") {
    result = multiply(num1, num2);
  } else if (operation === "divide") {
    if (num2 === 0) {
      return res.status(400).send("Error: Division by zero is not allowed.");
    }
    result = divide(num1, num2); // 나누기 함수 적용
  } else {
    // 안내 메시지에도 추가된 연산을 명시해 줍니다.
    return res
      .status(400)
      .send(
        "Error: Please specify 'add', 'subtract', 'multiply', or 'divide' for the operation.",
      );
  }

  res.send(`Result: ${result}`);
});

module.exports = app;