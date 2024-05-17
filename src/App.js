import "./App.css"
import React from "react";
import { Layout } from "antd";
import { ConfigProvider } from 'antd';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from './components/SideBar';

import Home from "./page/Home";
import SolidityOptimizeName from "./page/SolidityOptimizeName";
import EthereumUnitConverter from "./page/EthereumUnitConverter";
import EthereumAddressChecksum from "./page/EthereumAddressChecksum";
import EthereumInputDataDecoder from "./page/EthereumInputDataDecoder";
import EthereumFunctionExtractor from "./page/EthereumFunctionExtractor";
import MultiChainBalanceChecker from "./page/MultiChainBalanceChecker";

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
              <Route path="/" element={<Home/>} />
              
              <Route path="/number/ethereum-unit-converter" element={<EthereumUnitConverter />} />
              
              <Route path="/dev/ethereum-address-checksum" element={<EthereumAddressChecksum />} />
              <Route path="/dev/solidity-optimize-name" element={<SolidityOptimizeName />} />
              <Route path="/dev/ethereum-input-data-decoder" element={<EthereumInputDataDecoder />} />
              <Route path="/dev/ethereum-function-extractor" element={<EthereumFunctionExtractor />} />

              <Route path="/utils/multi-chain-balance-checker" element={<MultiChainBalanceChecker />} />
            </Routes>
          </Layout.Content>
        </Layout>
        <Footer/>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;