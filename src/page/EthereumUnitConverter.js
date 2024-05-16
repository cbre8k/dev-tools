import "./EthereumUnitConverter.css";
import React, { useState } from "react";
import { Input, Space, Button } from 'antd';
import converter from "ethereum-unit-converter";
import { CopyOutlined } from "@ant-design/icons";

const EthereumUnitConverter = () => {
  const [values, setValues] = useState({
    wei: "1000000000000000000",
    kwei: "1000000000000000",
    mwei: "1000000000000",
    gwei: "1000000000",
    szabo: "1000000",
    finney: "1000",
    ether: "1",
    kether: "0.001",
    mether: "0.000001",
    gether: "0.000000001",
    tether: "0.000000000001"
    });

  const handleChange = (number, unit) => {
    const isValidNumber = !isNaN(parseFloat(number)) && isFinite(number);
    if (!isValidNumber) {
      number = "";
    }
    const convertedValues = isValidNumber ? converter(number, unit, null) : {};
    setValues({
      wei: convertedValues.wei || "",
      kwei: convertedValues.kwei || "",
      mwei: convertedValues.mwei || "",
      gwei: convertedValues.gwei || "",
      szabo: convertedValues.szabo || "",
      finney: convertedValues.finney || "",
      ether: convertedValues.ether || "",
      kether: convertedValues.kether || "",
      mether: convertedValues.mether || "",
      gether: convertedValues.gether || "",
      tether: convertedValues.tether || ""
    });
  }

  const handleCopy = (id) => () => {
    const copyText = document.getElementById(id).value;
    if (copyText) {
      console.log(copyText);
      navigator.clipboard.writeText(copyText);
    }
  };

  return (
    <Space direction="vertical" className="container">
      <h3>Ethereum Unit Converter</h3>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("wei")}/>
        <Input type="number" step="any" id="wei" value={values.wei} onChange={(e) => handleChange(e.target.value, "wei")} addonAfter="Wei" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("kwei")}/>
        <Input type="number" step="any" id="kwei" value={values.kwei} onChange={(e) => handleChange(e.target.value, "kwei")} addonAfter="Kwei" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("mwei")}/>
        <Input type="number" step="any" id="mwei" value={values.mwei} onChange={(e) => handleChange(e.target.value, "mwei")} addonAfter="Mwei" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("gwei")}/>
        <Input type="number" step="any" id="gwei" value={values.gwei} onChange={(e) => handleChange(e.target.value, "gwei")} addonAfter="Gwei" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("szabo")}/>
        <Input type="number" step="any" id="szabo" value={values.szabo} onChange={(e) => handleChange(e.target.value, "szabo")} addonAfter="Szabo" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("finney")}/>
        <Input type="number" step="any" id="finney" value={values.finney} onChange={(e) => handleChange(e.target.value, "finney")} addonAfter="Finney" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("ether")}/>
        <Input type="number" step="any"  id="ether" value={values.ether} onChange={(e) => handleChange(e.target.value, "ether")} addonAfter="Ether" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("kether")}/>
        <Input type="number" step="any" id="kether" value={values.kether} onChange={(e) => handleChange(e.target.value, "kether")} addonAfter="Kether" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("mether")}/>
        <Input type="number" step="any" id="mether" value={values.mether} onChange={(e) => handleChange(e.target.value, "mether")} addonAfter="Mether" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("gether")}/>
        <Input type="number" step="any" id="gether" value={values.gether} onChange={(e) => handleChange(e.target.value, "gether")} addonAfter="Gether" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("tether")}/>
        <Input type="number" step="any" id="tether" value={values.tether} onChange={(e) => handleChange(e.target.value, "tether")} addonAfter="Tether" />
      </Space.Compact>
    </Space>
  )
}

export default EthereumUnitConverter;