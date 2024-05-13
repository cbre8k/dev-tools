import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./EthereumInputDataDecoder.module.css"

const EthereumInputDataDecoder = () => {

  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col-sm-3">
          <h4>Abi</h4>
          <textarea className="col-sm-12" id="abi"></textarea>
        </div>

        <div className="col-sm-3">
          <h4>Data</h4>
          <textarea className="col-sm-12" id="data"></textarea>
        </div>

        <div className="col-sm-3">
          <h4>Result</h4>
          <textarea className="col-sm-12" id="output"></textarea>
        </div>
      </div>
      <Button>Decode</Button>
    </div>
  )
}

export default EthereumInputDataDecoder