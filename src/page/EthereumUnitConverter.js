import "./EthereumUnitConverter.css";
import React, { useState } from "react";
import { InputNumber, Space, Button } from 'antd';
import converter from "ethereum-unit-converter";
import { CopyOutlined } from "@ant-design/icons";
import { defaultUnitValue } from "../utils/data/defaultData";

const EthereumUnitConverter = () => {
  const [values, setValues] = useState(defaultUnitValue);

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
        <InputNumber style={{ width: '100%' }} step="1" id="wei" value={values.wei} onChange={(v) => handleChange(v, "wei")} addonAfter="Wei" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("kwei")}/>
        <InputNumber style={{ width: '100%' }} step="1" id="kwei" value={values.kwei} onChange={(v) => handleChange(v, "kwei")} addonAfter="Kwei" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("mwei")}/>
        <InputNumber style={{ width: '100%' }} step="1" id="mwei" value={values.mwei} onChange={(v) => handleChange(v, "mwei")} addonAfter="Mwei" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("gwei")}/>
        <InputNumber style={{ width: '100%' }} step="1" id="gwei" value={values.gwei} onChange={(v) => handleChange(v, "gwei")} addonAfter="Gwei" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("szabo")}/>
        <InputNumber style={{ width: '100%' }} step="1" id="szabo" value={values.szabo} onChange={(v) => handleChange(v, "szabo")} addonAfter="Szabo" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("finney")}/>
        <InputNumber style={{ width: '100%' }} step="1" id="finney" value={values.finney} onChange={(v) => handleChange(v, "finney")} addonAfter="Finney" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("ether")}/>
        <InputNumber style={{ width: '100%' }} step="1"  id="ether" value={values.ether} onChange={(v) => handleChange(v, "ether")} addonAfter="Ether" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("kether")}/>
        <InputNumber style={{ width: '100%' }} step="1" id="kether" value={values.kether} onChange={(v) => handleChange(v, "kether")} addonAfter="Kether" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("mether")}/>
        <InputNumber style={{ width: '100%' }} step="1" id="mether" value={values.mether} onChange={(v) => handleChange(v, "mether")} addonAfter="Mether" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("gether")}/>
        <InputNumber style={{ width: '100%' }} step="1" id="gether" value={values.gether} onChange={(v) => handleChange(v, "gether")} addonAfter="Gether" />
      </Space.Compact>
      <Space.Compact style={{ width: '100%' }}>
        <Button type="primary" icon={<CopyOutlined/>} onClick={handleCopy("tether")}/>
        <InputNumber style={{ width: '100%' }} step="1" id="tether" value={values.tether} onChange={(v) => handleChange(v, "tether")} addonAfter="Tether" />
      </Space.Compact>
    </Space>
  )
}

export default EthereumUnitConverter;