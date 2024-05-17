import "./EthereumInputDataDecoder.css";
import React, { useState } from "react";
import InputDataDecoder from "ethereum-input-data-decoder";
import { Input, Space, Button, Row, Col } from 'antd';
import { defaultAbi, defaultInputData, defaultOutputData } from "../utils/data/defaultData";

const EthereumInputDataDecoder = () => {
  const [abi, setAbi] = useState(JSON.stringify(defaultAbi, null, 4));
  const [data, setData] = useState(defaultInputData);
  const [output, setOutput] = useState(JSON.stringify(defaultOutputData, null, 4));
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
      <Row gutter={8}>
        <Col lg={8} xs={24}>
          <p>Abi</p>
          <TextArea className="t-area" id="abi" value={abi} onChange={(e) => setAbi(e.target.value)} style={{ height: 400, width: "100%", resize: 'none' }}></TextArea>
        </Col>

        <Col lg={8} xs={24}>
          <p>Data</p>
          <TextArea className="t-area" id="data" value={data} onChange={(e) => setData(e.target.value)} style={{ height: 400, width: "100%", resize: 'none' }}></TextArea>
        </Col>

        <Col lg={8} xs={24}>
          <p>Output</p>
          <TextArea className="t-area" id="output" value={output} readOnly style={{ height: 400, width: "100%", resize: 'none' }}></TextArea>
        </Col>
      </Row>
      <Button type="primary" onClick={handleClick}>Decode</Button>
    </Space>
  )
}

export default EthereumInputDataDecoder;
