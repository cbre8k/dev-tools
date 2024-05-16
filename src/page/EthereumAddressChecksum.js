import React, { useState } from "react";
import { toChecksumAddress } from "ethereum-checksum-address";
import { Input, Space, Button, Row, Col } from 'antd';

const EthereumAddressChecksum = () => {
  const [result, setResult] = useState("");

  const handleClick = () => {
    const address = document.getElementById("address").value;
    setResult(toChecksumAddress(address));
  }

  return (
    <Space direction="vertical" className="container">
      <h3>Ethereum Address Checksum</h3>
      <Row gutter={16}>
        <Col span={22}>
          <Input id="address" className="input"/>
        </Col>
        <Col span={2}>
          <Button type="primary" onClick={handleClick} >Optimize</Button>
        </Col>
      </Row>
      <div>
        {result}
      </div>
    </Space>
  )
}

export default EthereumAddressChecksum