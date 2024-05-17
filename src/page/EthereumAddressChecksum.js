import React, { useState } from "react";
import { isAddress } from "web3-validator";
import { Input, Space, Button, Row, Col, List } from 'antd';
import { toChecksumAddress } from "ethereum-checksum-address";

const EthereumAddressChecksum = () => {
  const [results, setResults] = useState("");

  const handleClick = () => {
    const address = document.getElementById("address").value;
    if (!isAddress(address)) {
      setResults([...results, { id: Date.now(), value: "Incorrect input" }]);
      return;
    }
    setResults([...results, { id: Date.now(), value: toChecksumAddress(address) }]);
  }

  const handleRemove = (id) => {
    setResults(results.filter(result => result.id !== id));
  };

  return (
    <Space direction="vertical" className="container">
      <h3>Ethereum Address Checksum</h3>
      <Row gutter={8}>
        <Col span={16}>
          <Input id="address" className="input"/>
        </Col>
        <Col span={8}>
          <Button type="primary" onClick={handleClick} style={{ width: '100%' }} >Optimize</Button>
        </Col>
      </Row>
      <List
        className="history-result"
        bordered
        dataSource={results}
        renderItem={item => (
          <List.Item>
            {item.value} <Button onClick={() => handleRemove(item.id)} type="link">Remove</Button>
          </List.Item>
        )}
      />
    </Space>
  )
}

export default EthereumAddressChecksum