import { keccak256 } from "js-sha3";
import React, { useState } from "react";
import { Input, Space, Button, Row, Col } from 'antd';

const SolidityOptimizeName = () => {
  const [result, setResult] = useState("");

  const CHARS = '0123456789abcdefghijklmnopqrstuvwxysABCDEFGHIJKLMNOPQRSTUVWXYS$_'.split('');
  const CHAR_MAP = {};
  CHARS.forEach((c, index) => {
    CHAR_MAP[c] = index;
  });

  const CHAR_CODE_MAP = {};
  CHARS.forEach((c, index) => {
    CHAR_CODE_MAP[index] = c.charCodeAt(0);
  });

  const data = { blocks: [], s: [] };
  
  function save(hash) {
    data.reset = hash.reset;
    data.block = hash.block;
    data.start = hash.start;
    data.finalized = hash.finalized;
    data.lastByteIndex = hash.lastByteIndex;
    for (let i = 0; i < hash.blocks.length; ++i) {
      data.blocks[i] = hash.blocks[i];
    }
    for (let i = 0; i < hash.s.length; ++i) {
      data.s[i] = hash.s[i];
    }
  }

  function restore(hash) {
    hash.reset = data.reset;
    hash.block = data.block;
    hash.start = data.start;
    hash.finalized = data.finalized;
    hash.lastByteIndex = data.lastByteIndex;
    for (let i = 0; i < data.blocks.length; ++i) {
      hash.blocks[i] = data.blocks[i];
    }
    for (let i = 0; i < data.s.length; ++i) {
      hash.s[i] = data.s[i];
    }
  }

  function toBytes(str) {
    const bytes = [];
    for (let i = 0; i < str.length; ++i) {
      bytes.push(str.charCodeAt(i));
    }
    return bytes;
  }

  function parseSignature(signature) {
    if (signature.charAt(signature.length - 1) !== ')' || signature.indexOf(' ') !== -1) {
      return false;
    }
    const parts = signature.split('(');
    if (parts.length === 2) {
      return {
        name: parts[0],
        args: '(' + parts[1]
      };
    } else {
      return false;
    }
  }

  function increase(bytes) {
    bytes[0] += 1;
    for (let i = 0; i < bytes.length; ++i) {
      if (bytes[i] === 64) {
        bytes[i] = 0;
        if (i === bytes.length - 1) {
          bytes[i + 1] = 1;
        } else {
          bytes[i + 1] += 1;
        }
      } else {
        break;
      }
    }
    return bytes;
  }

  function toChars(bytes) {
    let str = '';
    for (let i = 0; i < bytes.length; ++i) {
      str += CHARS[bytes[i]];
    }
    return str;
  }

  function toCharCodes(bytes) {
    const codes = [];
    for (let i = 0; i < bytes.length; ++i) {
      codes.push(CHAR_CODE_MAP[bytes[i]]);
    }
    return codes;
  }

  function find(obj) {
    let sig = obj.name + obj.args;
    const args = toBytes(obj.args);
    const bytes = [0];
    let index = 0;
    const prefix = toBytes(obj.name + '_');
    let hash = keccak256.create();
    hash.update(prefix);
    save(hash);
    let char, methodId = keccak256.array(sig);
    while (methodId[0] || methodId[1]) {
      if (index >= CHARS.length) {
        increase(bytes);
        hash = keccak256.create();
        hash.update(prefix);
        hash.update(toCharCodes(bytes));
        save(hash);
        index = 0;
      }
      char = CHARS[index];
      hash.update(char);
      hash.update(args);
      methodId = hash.array();
      restore(hash);
      ++index;
    }
    if (index) {
      sig = obj.name + '_' + toChars(bytes) + char + obj.args;
    }
    return [sig, keccak256(sig).substr(0, 8)];
  }

  const handleClick = () => {
    const name = document.getElementById("name").value;
    const data = parseSignature(name);
    if (!data) {
      setResult("Incorrect input");
      return;
    }
    let tempRs = find(data);
    setResult(tempRs[0] + ": 0x" + tempRs[1]);
  };

  return (
    <Space direction="vertical" className="container">
      <h3>Solidity Optimize Name</h3>
      <Row gutter={16}>
        <Col span={18}>
          <Input id="name" className="input"/>
        </Col>
        <Col span={6}>
          <Button type="primary" onClick={handleClick}>Optimize</Button>
        </Col>
      </Row>
      <div>
        {result}
      </div>
    </Space>
  );
};

export default SolidityOptimizeName;
