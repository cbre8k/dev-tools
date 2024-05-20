import "./Bitwise.css";
import React, { useState } from 'react';
import { Input, Button, List, Row, Col, Space } from 'antd';

const { TextArea } = Input;

const isNumber = (token) => !isNaN(token);

const performOperation = (a, operator, b) => {
  switch (operator) {
    case '|':
      return a | b;
    case '^':
      return a ^ b;
    case '&':
      return a & b;
    case '<<':
      return a << b;
    case '>>':
      return a >> b;
    case '>>>':
      return a >>> b;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const parseInput = (input) => {
  return input.match(/(\d+|[|^&<>]{1,3})/g).map(str => str.trim()).filter(str => str.length > 0);
};

const toBinary = (num) => num.toString(2).padStart(8, '0');

const toHex = (num) => '0x' + num.toString(16).toUpperCase();

const Bitwise = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const calculateResult = () => {
    const parsedInput = parseInput(input);
    console.log(parsedInput);
    if (parsedInput.length === 0) return;

    const hasOperators = parsedInput.some(token => !isNumber(token));
    if (!hasOperators) {
      // No operators, just show the number in different formats
      const formattedResults = parsedInput.map(num => {
        const number = parseInt(num, 10);
        return (
          <Row gutter={[8, 8]}>
            <Col lg={2} xs={2} className="operator"></Col>
            <Col lg={4} xs={6} className="decimal">{number}</Col>
            <Col lg={10} xs={10} className="binary">{toBinary(number)}</Col>
            <Col lg={8} xs={6} className="hex">{toHex(number)}</Col>
          </Row>
        );
      });

      setResults([...results, { id: Date.now(), input, formattedResults, finalResult: null }]);
      return;
    }

    const formattedResults = [];
    let currentResult = parseInt(parsedInput[0], 10);

    for (let i = 1; i < parsedInput.length; i += 2) {
      const operator = parsedInput[i];
      const nextNumber = parseInt(parsedInput[i + 1], 10);

      const result = performOperation(currentResult, operator, nextNumber);
      formattedResults.push({
        operator: operator,
        left: currentResult,
        right: nextNumber,
        result: result,
      });

      currentResult = result;
    }

    const finalFormattedResult = {
      id: Date.now(),
      input,
      intermediateResults: formattedResults,
      finalResult: currentResult,
    };

    setResults([...results, finalFormattedResult]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      calculateResult();
    }
  };

  const handleRemove = (id) => {
    setResults(results.filter(result => result.id !== id));
  };

  return (
    <Space direction="vertical" className="container">
      <h3>Bitwise</h3>
      <TextArea
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        rows={1}
        placeholder="Enter expression (e.g., 23 | 45 >> 2 or 4 6 8)"
      />
      <List
        bordered
        dataSource={results}
        renderItem={item => (
          <List.Item>
            <div style={{}} className="bitwise-result">
              <div>{item.input}</div>
              {item.finalResult === null ? (
                item.formattedResults.map((line, index) => (
                  <div key={index}>{line}</div>
                ))
              ) : (
                item.intermediateResults.map((line, index) => (
                  <div key={index}>
                    <Row gutter={[8, 8]}>
                      <Col lg={2} xs={2} className="operator"></Col>
                      <Col lg={4} xs={6} className="decimal">{line.left}</Col>
                      <Col lg={10} xs={10} className="binary">{toBinary(line.left)}</Col>
                      <Col lg={8} xs={6} className="hex">{toHex(line.left)}</Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                      <Col lg={2} xs={2} className="operator">{line.operator}</Col>
                      <Col lg={4} xs={6} className="decimal">{line.right}</Col>
                      <Col lg={10} xs={10} className="binary">{toBinary(line.right)}</Col>
                      <Col lg={8} xs={6} className="hex">{toHex(line.right)}</Col>
                    </Row>
                    <hr/>
                    <Row gutter={[8, 8]}>
                      <Col lg={2} xs={2} className="operator">=</Col>
                      <Col lg={4} xs={6} className="decimal">{line.result}</Col>
                      <Col lg={10} xs={10} className="binary">{toBinary(line.result)}</Col>
                      <Col lg={8} xs={6} className="hex">{toHex(line.result)}</Col>
                    </Row>
                  </div>
                ))
              )}
              <Button onClick={() => handleRemove(item.id)} style={{padding: '0'}} type="link">Remove</Button>
            </div>
          </List.Item>
        )}
      />
    </Space>
  );
};

export default Bitwise;
