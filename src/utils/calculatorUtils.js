// src/utils/calculatorUtils.js

import BigNumber from 'bignumber.js';

// Function to check if a token is an operator
const isOperator = (token) => ['+', '-', '*', '/'].includes(token);

// Function to check if a token is a number
const isNumber = (token) => !isNaN(token);

// Function to get the precedence of an operator
const getPrecedence = (operator) => {
  switch (operator) {
    case '+':
    case '-':
      return 1;
    case '*':
    case '/':
      return 2;
    default:
      return 0;
  }
};

// Shunting Yard Algorithm to convert infix to postfix
export const infixToPostfix = (tokens) => {
  const output = [];
  const operators = [];

  tokens.forEach((token) => {
    if (isNumber(token)) {
      output.push(token);
    } else if (isOperator(token)) {
      while (
        operators.length &&
        getPrecedence(operators[operators.length - 1]) >= getPrecedence(token)
      ) {
        output.push(operators.pop());
      }
      operators.push(token);
    } else if (token === '(') {
      operators.push(token);
    } else if (token === ')') {
      while (operators.length && operators[operators.length - 1] !== '(') {
        output.push(operators.pop());
      }
      operators.pop(); // Remove '(' from the stack
    }
  });

  while (operators.length) {
    output.push(operators.pop());
  }

  return output;
};

// Function to evaluate a postfix expression
export const evaluatePostfix = (postfixTokens) => {
  const stack = [];

  postfixTokens.forEach((token) => {
    if (isNumber(token)) {
      stack.push(new BigNumber(token));
    } else if (isOperator(token)) {
      const b = stack.pop();
      const a = stack.pop();
      let result;
      switch (token) {
        case '+':
          result = a.plus(b);
          break;
        case '-':
          result = a.minus(b);
          break;
        case '*':
          result = a.multipliedBy(b);
          break;
        case '/':
          result = a.dividedBy(b);
          break;
        default:
          throw new Error('Invalid operator');
      }
      stack.push(result);
    }
  });

  return stack.pop().toString();
};
