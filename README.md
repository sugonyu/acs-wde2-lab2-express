# ACS WDE2 Lab 2 Express App

Simple Express practice app with basic routes and calculator logic.

## Features

- `GET /` returns a welcome message
- `GET /hello?name=Tony` returns a personalized greeting
- `GET /calculator?operation=add&num1=3&num2=4` returns a calculation result
- Unit tests for `add`, `subtract`, `multiply`, and `divide`

## Tech Stack

- Node.js
- Express
- Jest
- Supertest

## Getting Started

```bash
npm install
npm start
```

The server runs on `http://localhost:3003`.

## Run Tests

```bash
npm test
```

## Example Routes

```text
GET /hello?name=Tony
GET /calculator?operation=add&num1=10&num2=5
GET /calculator?operation=subtract&num1=10&num2=5
GET /calculator?operation=multiply&num1=10&num2=5
GET /calculator?operation=divide&num1=10&num2=5
```
