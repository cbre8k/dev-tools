import "./App.css"
import React from "react";
import { Layout } from "antd";
import NavBar from "./components/NavBar";
import SideBar from './components/SideBar';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EthereumUnitConverter from "./page/EthereumUnitConverter";
import EthereumAddressChecksum from "./page/EthereumAddressChecksum";
import SolidityOptimizeName from "./page/SolidityOptimizeName";
import EthereumInputDataDecoder from "./page/EthereumInputDataDecoder";
import EthereumFunctionExtractor from "./page/EthereumFunctionExtractor";

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
        token: {
          colorPrimary: '#333333',
          colorBgContainer: '#fff',
        },
      }}>
        <NavBar />
        <Layout>
          <SideBar />
          <Layout.Content className="content">
            <Routes>
              <Route path="/number/ethereum-unit-converter" element={<EthereumUnitConverter />} />
              <Route path="/dev/ethereum-address-checksum" element={<EthereumAddressChecksum />} />
              <Route path="/dev/solidity-optimize-name" element={<SolidityOptimizeName />} />
              <Route path="/dev/ethereum-input-data-decoder" element={<EthereumInputDataDecoder />} />
              <Route path="/dev/ethereum-function-extractor" element={<EthereumFunctionExtractor />} />
            </Routes>
          </Layout.Content>
        </Layout>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;