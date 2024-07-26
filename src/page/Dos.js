import "./Dos.css";
import React from 'react';
import { Space } from 'antd';

const Dos = () => {
  return (
    <Space className="container dos" direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
      <div className="iframe-container">
        <iframe
          src="https://kitao.github.io/pyxel/wasm/launcher/?run=cgccld.dos.main&gamepad=enabled&packages=numpy,pandas"
          title="Dos"
        ></iframe>
      </div>
      <div className="instructions">
        <h4>[◀] to left</h4>
        <h4>[▶] to right</h4>
        <h4>[🅿] P to pause</h4>
        <h4>[🔄] R to restart</h4>
      </div>
    </Space>
  );
} 

export default Dos;