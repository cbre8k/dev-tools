import React, { useState } from "react";
// import { Button } from "react-bootstrap";
import InputDataDecoder from "ethereum-input-data-decoder";
// import styles from "./EthereumInputDataDecoder.module.css";
import { Input, Space, Button, Row, Col } from 'antd';
import "./EthereumInputDataDecoder.css";

const EthereumInputDataDecoder = () => {
  const [abi, setAbi] = useState("");
  const [data, setData] = useState("");
  const [output, setOutput] = useState("");
  const {TextArea} = Input;

  const handleClick = () => {
    const abiParsed = JSON.parse(abi.trim());
    const dataTrimmed = data
      .trim()
      .replace(/(?:[\s\S]*MethodID: (.*)[\s\S])?[\s\S]?\[\d\]:(.*)/gi, '$1$2');
    const decoder = new InputDataDecoder(abiParsed);
    setOutput(JSON.stringify(decoder.decodeData(dataTrimmed), null, 4));
  }

  return (
    <Space direction="vertical" className="container">
      <h3>Ethereum Input Data Decoder</h3>
      <Row gutter={16}>
        <Col span={8}>
          <p>Abi</p>
          <TextArea id="abi" value={abi} onChange={(e) => setAbi(e.target.value)} style={{ height: 400, width: "100%", resize: 'none' }}></TextArea>
        </Col>

        <Col span={8}>
          <p>Data</p>
          <TextArea id="data" value={data} onChange={(e) => setData(e.target.value)} style={{ height: 400, width: "100%", resize: 'none' }}></TextArea>
        </Col>

        <Col span={8}>
          <p>Output</p>
          <TextArea id="output" value={output} readOnly style={{ height: 400, width: "100%", resize: 'none' }}></TextArea>
        </Col>
      </Row>
      <Button type="primary" onClick={handleClick}>Decode</Button>
    </Space>
  )
}

export default EthereumInputDataDecoder;
