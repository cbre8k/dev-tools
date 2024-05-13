import React, { useState } from "react";
import { Button } from "react-bootstrap";
import InputDataDecoder from "ethereum-input-data-decoder";
import styles from "./EthereumInputDataDecoder.module.css";

const EthereumInputDataDecoder = () => {
  const [abi, setAbi] = useState("");
  const [data, setData] = useState("");
  const [output, setOutput] = useState("");

  const handleClick = () => {
    const abiParsed = JSON.parse(abi.trim());
    const dataTrimmed = data
      .trim()
      .replace(/(?:[\s\S]*MethodID: (.*)[\s\S])?[\s\S]?\[\d\]:(.*)/gi, '$1$2');
    const decoder = new InputDataDecoder(abiParsed);
    setOutput(JSON.stringify(decoder.decodeData(dataTrimmed), null, 4));
  }

  return (
    <div className={styles.container}>
      <h3>Ethereum Input Data Decoder</h3>
      <hr/>
      <div className="row">
        <div className={styles.col}>
          <p>ABI</p>
          <textarea id="abi" value={abi} onChange={(e) => setAbi(e.target.value)}></textarea>
        </div>

        <div className={styles.col}>
          <p>DATA</p>
          <textarea id="data" value={data} onChange={(e) => setData(e.target.value)}></textarea>
        </div>

        <div className={styles.col}>
          <p>OUTPUT</p>
          <textarea id="output" value={output} readOnly></textarea>
        </div>
      </div>
      <Button className={styles.btn} onClick={handleClick}>Decode</Button>
    </div>
  )
}

export default EthereumInputDataDecoder;
