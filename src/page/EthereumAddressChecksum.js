import styles from "./EthereumAddressChecksum.module.css";
import React, { useState } from "react";
import { toChecksumAddress } from "ethereum-checksum-address";
import { Button, InputGroup, Form } from "react-bootstrap";

const EthereumAddressChecksum = () => {
  const [result, setResult] = useState("");

  const handleClick = () => {
    const address = document.getElementById("address").value;
    setResult(toChecksumAddress(address));
  }

  return (
    <div className={styles.container}>
      <h3>Ethereum Address Checksum</h3>
      <hr/>
      <InputGroup className="input-group input-group-sm mb-3">
        <Form.Control
          id="address"
          aria-label="Address checksum"
        />
        <Button onClick={handleClick} className={styles.btn}>Checksum</Button>
      </InputGroup>
      <div className={styles.result}>
        {result}
      </div>
    </div>
  )
}

export default EthereumAddressChecksum