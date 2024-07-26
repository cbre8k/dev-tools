import "./Dos.css";
import React from 'react';
import { Space } from 'antd';

const Dos = () => {
  return (
    <Space className="container dos" direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
      <iframe
        src="https://kitao.github.io/pyxel/wasm/launcher/?run=cgccld.dos.main"
        title="Dos"
        width="640px"
        height="600px"
        style={{ border: 'none' }}
      ></iframe>
    </Space>
  );
} 

export default Dos;