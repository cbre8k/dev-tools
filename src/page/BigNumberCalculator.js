import React, { useState } from 'react';
import { Input, List, Button } from 'antd';
import { infixToPostfix, evaluatePostfix } from '../utils/calculatorUtils';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const { TextArea } = Input;  

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const calculateResult = () => {
    try {
      const tokens = input.match(/(\d+\.?\d*|[+\-*/()])/g);

      if (!tokens || tokens.length === 0) {
        setResults([...results, { id: Date.now(), input: input, value: "Invalid expression" }]);
        return;
      }

      const postfixTokens = infixToPostfix(tokens);

      setResults([...results, { id: Date.now(), input: input, value: evaluatePostfix(postfixTokens) }]);
    } catch (error) {
      setResults([...results, { id: Date.now(), input: input, value: "Error calculating" }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent Enter key from adding a newline
      calculateResult();
    }
  };

  const handleRemove = (id) => {
    const updatedResults = results.filter(result => result.id !== id);
    setResults(updatedResults);
  };

  return (
    <div>
      <h1>Big Number Calculator</h1>
      <TextArea
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        rows={1}      
        placeholder="Enter expression (e.g., (123+456)*2-789)"
      />
      <List
        className="history-result"
        style={{marginTop: "10px"}}      
        bordered
        dataSource={results}
        renderItem={item => (
          <List.Item>
            {item.input} = {item.value} <Button onClick={() => handleRemove(item.id)} type="link">Remove</Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Calculator;
