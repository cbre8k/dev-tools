import axios from 'axios';
import styles from "./EthereumFunctionExtractor.module.css";
import React, { useState, useEffect } from "react";
import {functionArguments, functionSelectors} from "evmole";

const EthereumFunctionExtractor = () => {
  const [res, setRes] = useState({});
  const [bytecode, setBytecode] = useState("");
  const [functionSig, setFunctionSig] = useState([""]);
  
  useEffect(() => {
    const fetchData = async () => {
      const request = functionSig.join(',');
      const response = await axios.get(`https://api.openchain.xyz/signature-database/v1/lookup?function=${request}&filter=true`);
      setRes(response.data.result.function);
    };

    setFunctionSig(functionSelectors(bytecode));
    fetchData();
  }, [bytecode]);

  return (
    <div className={styles.container}>
      <h3>EVMole</h3>
      <hr/>
      <div>
        <h4>Contract Deployed Bytecode</h4>
        <textarea onChange={(e) => setBytecode(e.target.value)}></textarea>
      </div>
      <div className={styles.result}>
        {
          functionSig.map((value, index) => {
            const evmoleArgs = functionArguments(bytecode, value);
            const openchainxyz = res[functionSig[index]][0].name;
            return (
              <div className={styles.function}>
                <div className={styles.signature}>
                  {value}
                </div>
                <div>
                  <div className={styles.evmole}>
                    <div className={styles.label}>   evmole:</div>{evmoleArgs}
                  </div>
                  <div className={styles.xyz}>
                    <div className={styles.label}>openchain:</div>{openchainxyz}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default EthereumFunctionExtractor;