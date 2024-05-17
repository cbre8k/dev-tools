import { ethers } from 'ethers';
import React, { useState } from "react";
import { isAddress } from "web3-validator";
import { chainSupport } from "../utils/data/defaultData";
import { Space, Input, Row, Col, Button, Image, message, Spin, List } from "antd";

const MultiChainBalanceChecker = () => {
  const [address, setAddress] = useState("");
  const [balances, setBalances] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleClick = async () => {
    if (!isAddress(address)) {
      message.error('Invalid Ethereum address');
      return;
    }

    setLoading(true);
    const newBalances = [];
    for (const key in chainSupport) {
      const { chainName, rpcUrl, native } = chainSupport[key];
      const provider = new ethers.JsonRpcProvider(rpcUrl);
      try {
        const balance = await provider.getBalance(address);
        newBalances.push({
          key: key,
          native: native,
          chain: chainName,
          balance: balance,
        });
      } catch (error) {
        newBalances.push({
          key: key,
          native: native,
          chain: chainName,
          balance: '0',
        });
      }
    }
    setBalances(newBalances);
    setLoading(false);
  };

  return (
    <Space direction="vertical" className="container">
      <h3>Multi-chain Balance Checker</h3>
      <Row gutter={8}>
        <Col span={16}>
          <Input id="address" className="address" onChange={handleChange} placeholder="Enter Ethereum address"/>
        </Col>
        <Col span={8}>
          <Button type="primary" style={{ width: '100%' }} onClick={handleClick} disabled={loading}>
            Get balances
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Row justify="center" style={{ marginTop: 50 }}>
          <Spin size="large" />
        </Row>
      ) : (
        <List
          bordered
          itemLayout="horizontal"
          dataSource={balances}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Image preview={false} width={50} src={process.env.PUBLIC_URL + `/${item.key}.svg`} alt="..." />}
                title={<div className="name">{item.chain}</div>}
                description={<div className="balance">{ethers.formatEther(item.balance)} {item.native}</div>}
              />
            </List.Item>
          )}
        />
      )}
    </Space>
  )
}

export default MultiChainBalanceChecker;
