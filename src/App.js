import "./App.css"
import React from "react";
import SideNav from './components/SideNav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EthereumUnitConverter from "./page/EthereumUnitConverter";
import EthereumAddressChecksum from "./page/EthereumAddressChecksum";
import SolidityOptimizeName from "./page/SolidityOptimizeName";
import EthereumInputDataDecoder from "./page/EthereumInputDataDecoder";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <div className="row">
            <div className="col-sm-3">
              <SideNav />
            </div>
            <div className="col-sm-9">
              <Routes>
                <Route path="/number/ethereum-unit-converter" element={<EthereumUnitConverter />} />
                <Route path="/dev/ethereum-address-checksum" element={<EthereumAddressChecksum />} />
                <Route path="/dev/solidity-optimize-name" element={<SolidityOptimizeName />} />
                <Route path="dev/ethereum-input-data-decoder" element={<EthereumInputDataDecoder />} />
              </Routes>
            </div>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;