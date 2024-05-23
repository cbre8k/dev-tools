import { ethers } from 'ethers';
import React, { useState, useEffect } from "react";
import { Space, Row, Col, Input} from "antd";
import { defaultDomain, defaultTypeHash, defaultValue } from '../utils/data/defaultData';

const SignatureRecover = () => {
  const { TextArea } = Input;
  const [sig, setSignature] = useState("0x74ff2b1850dfa49f825a29760cf7f8194465190481afb49dd81f0ef7783d7b9638180110bdbf5d85ab8d9f39d2d4f4bc63f017c5b53e90bf915cf22c2b7125901b");
  const [domain, setDomain] = useState(JSON.stringify(defaultDomain, null, 4));
  const [typeHash, setTypeHash] = useState(JSON.stringify(defaultTypeHash, null, 4));
  const [value, setValue] = useState(JSON.stringify(defaultValue, null, 4));
  const [result, setResult] = useState("");

  useEffect(() => {
    try {
      const recoveredAddress = ethers.verifyTypedData(JSON.parse(domain.trim()), JSON.parse(typeHash.trim()), JSON.parse(value.trim()), sig);
      setResult(recoveredAddress);
    } catch (error) {
      setResult(error.toString());
    }
  },[domain, sig, typeHash, value])

  return (
    <Space direction="vertical" className="container">
      <h3>Signature Recover</h3>
      <Row gutter={8}>
        <Col lg={24} xs={24}>
          <p>Signature</p>
          <TextArea rows={1} className="t-area" id="signature" value={sig} onChange={(e) => setSignature(e.target.value)} style={{ width: "100%", resize: 'none' }}></TextArea>
        </Col>

        <Col lg={24} xs={24}>
          <p>Domain</p>
          <TextArea className="t-area" id="domain" value={domain} onChange={(e) => setDomain(e.target.value)} style={{ height: 100, width: "100%", resize: 'none' }}></TextArea>
        </Col>

        <Col lg={24} xs={24}>
          <p>Type Hash</p>
          <TextArea className="t-area" id="typeHash" value={typeHash} onChange={(e) => setTypeHash(e.target.value)} style={{ height: 100, width: "100%", resize: 'none' }}></TextArea>
        </Col>

        <Col lg={24} xs={24}>
          <p>Value</p>
          <TextArea className="t-area" id="value" value={value} onChange={(e) => setValue(e.target.value)} style={{ height: 100, width: "100%", resize: 'none' }}></TextArea>
        </Col>

        <Col lg={24} xs={24}>
          <p>Result</p>
          <TextArea rows={1} className="t-area" id="result" value={result} onChange={(e) => setValue(e.target.value)} style={{ width: "100%", resize: 'none' }}></TextArea>
        </Col>
      </Row>
    </Space>
  )
};

export default SignatureRecover;