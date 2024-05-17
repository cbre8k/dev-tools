import axios from 'axios';
import { Input, Space } from 'antd';
import "./EthereumFunctionExtractor.css"
import React, { useState, useEffect } from "react";
import { functionArguments, functionSelectors } from "evmole";
import { defaultBytecodeDeployed } from "../utils/data/defaultData";

const EthereumFunctionExtractor = () => {
  const [res, setRes] = useState({});
  const [bytecode, setBytecode] = useState(defaultBytecodeDeployed);
  const { TextArea } = Input;

  useEffect(() => {
    const fetchData = async () => {
      const sigs = functionSelectors(bytecode).map((v) => `0x${v}`).sort();
      try {
        const response = await axios.get(`https://api.openchain.xyz/signature-database/v1/lookup?function=${sigs.join(',')}&filter=true`);
        setRes(response.data.result.function);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [bytecode]);

  return (
    <Space direction="vertical" className="container">
      <h3>Ethereum Function Extractor</h3>
      <TextArea defaultValue={defaultBytecodeDeployed} onChange={(e) => setBytecode(e.target.value)} style={{ height: 120, width: "100%", resize: 'none' }} />
      <div>
        {Object.keys(res).map((value, index) => {
          const args = functionArguments(bytecode, value.substr(2));
          const openchain = res[value] ? res[value][0].name : 'N/A';
          return (
            <div className="signature" key={index} >
              <Space direction="horizontal">
                {value}
                <Space direction="vertical" className="lookup">
                  <div className="evmole"><span className="label">evmole:</span>({args})</div>
                  <div className="openchain"><span className="label">openchain:</span>{openchain}</div>
                </Space>
              </Space>
              <hr/>
            </div>
          )
        })}
      </div>
    </Space>
  );
};

export default EthereumFunctionExtractor;
