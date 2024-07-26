import "./App.css"
import React from "react";
import { Layout } from "antd";
import { ConfigProvider } from 'antd';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from './components/SideBar';

import Home from "./page/Home";
import Bitwise from "./page/Bitwise";
import UnixTimestamp from "./page/UnixTimestamp";
import SignatureRecover from "./page/SignatureRecover";
import BigNumberCalculator from "./page/BigNumberCalculator";
import SolidityOptimizeName from "./page/SolidityOptimizeName";
import EthereumUnitConverter from "./page/EthereumUnitConverter";
import EthereumAddressChecksum from "./page/EthereumAddressChecksum";
import EthereumInputDataDecoder from "./page/EthereumInputDataDecoder";
import EthereumFunctionExtractor from "./page/EthereumFunctionExtractor";
import MultiChainBalanceChecker from "./page/MultiChainBalanceChecker";
import Dos from "./page/Dos";

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

              <Route path="/date/unix-timestamp" element={<UnixTimestamp/>} />
              
              <Route path="/number/bitwise-calculator" element={<Bitwise />} />
              <Route path="/number/ethereum-unit-converter" element={<EthereumUnitConverter />} />
              <Route path="/number/big-number-calculator" element={ <BigNumberCalculator/> } />

              <Route path="/dev/signature-recover" element={<SignatureRecover/>} />
              <Route path="/dev/ethereum-address-checksum" element={<EthereumAddressChecksum />} />
              <Route path="/dev/solidity-optimize-name" element={<SolidityOptimizeName />} />
              <Route path="/dev/ethereum-input-data-decoder" element={<EthereumInputDataDecoder />} />
              <Route path="/dev/ethereum-function-extractor" element={<EthereumFunctionExtractor />} />

              <Route path="/misc/multi-chain-balance-checker" element={<MultiChainBalanceChecker />} />
            
              <Route path="dos/dos-pixel" element={<Dos/>} />
            </Routes>
          </Layout.Content>
        </Layout>
        <Footer/>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;