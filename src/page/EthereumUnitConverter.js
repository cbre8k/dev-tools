import "./EthereumUnitConverter.css";
import React, { useState } from "react";
import converter from "ethereum-unit-converter";
import { Button, InputGroup, Form } from "react-bootstrap";

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
    // Check if the input value is a valid number
    const isValidNumber = !isNaN(parseFloat(number)) && isFinite(number);

    // If the input value is not a valid number, set the value to an empty string
    if (!isValidNumber) {
      number = "";
    }

    // Perform conversion only if the input value is a valid number
    const convertedValues = isValidNumber ? converter(number, unit, null) : {};

    // Update the state with the converted values
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
    <div className="container"> 
      <h3>Ethereum Unit Converter</h3>
      <hr/>
      <InputGroup className="input-group input-group-sm mb-3">
        <Button onClick={handleCopy("wei")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
          </svg>
        </Button>
        <Form.Control
          id="wei"
          step="any" 
          type="number"
          aria-label="Wei"
          value={values.wei}
          onChange={(e) => handleChange(e.target.value, "wei")}
        />
        <InputGroup.Text>Wei</InputGroup.Text>
      </InputGroup>

      <InputGroup className="input-group input-group-sm mb-3">
        <Button onClick={handleCopy("kwei")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
          </svg>
        </Button>
        <Form.Control
          id="kwei"
          step="any" 
          type="number"
          aria-label="Kwei"
          value={values.kwei}
          onChange={(e) => handleChange(e.target.value, "kwei")}
        />
        <InputGroup.Text>Kwei</InputGroup.Text>
      </InputGroup>

      <InputGroup className="input-group input-group-sm mb-3">
        <Button onClick={handleCopy("mwei")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
          </svg>
        </Button>
        <Form.Control
          id="mwei"
          step="any" 
          type="number"
          aria-label="Mwei"
          value={values.mwei}
          onChange={(e) => handleChange(e.target.value, "mwei")}
        />
        <InputGroup.Text>Mwei</InputGroup.Text>
      </InputGroup>

      <InputGroup className="input-group input-group-sm mb-3">
        <Button onClick={handleCopy("gwei")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
          </svg>  
        </Button>
        <Form.Control
          id="gwei"
          step="any" 
          type="number"
          aria-label="Gwei"
          value={values.gwei}
          onChange={(e) => handleChange(e.target.value, "gwei")}
        />
        <InputGroup.Text>Gwei</InputGroup.Text>
      </InputGroup>

      <InputGroup className="input-group input-group-sm mb-3">
        <Button onClick={handleCopy("szabo")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
          </svg>  
        </Button>
        <Form.Control
          id="szabo"
          step="any" 
          type="number"
          aria-label="Szabo"
          value={values.szabo}
          onChange={(e) => handleChange(e.target.value, "szabo")}
        />
        <InputGroup.Text>Szabo</InputGroup.Text>
      </InputGroup>

      <InputGroup className="input-group input-group-sm mb-3">
        <Button onClick={handleCopy("finney")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
          </svg>
        </Button>
        <Form.Control
          id="finney"
          step="any" 
          type="number"
          aria-label="Finney"
          value={values.finney}
          onChange={(e) => handleChange(e.target.value, "finney")}
        />
        <InputGroup.Text>Finney</InputGroup.Text>
      </InputGroup>

      <InputGroup className="input-group input-group-sm mb-3">
        <Button onClick={handleCopy("ether")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
          </svg>
        </Button>
        <Form.Control
          id="ether"
          step="any" 
          type="number"
          aria-label="Ether"
          value={values.ether}
          onChange={(e) => handleChange(e.target.value, "ether")}
        />
        <InputGroup.Text>Ether</InputGroup.Text>
      </InputGroup>

      <InputGroup className="input-group input-group-sm mb-3">
        <Button onClick={handleCopy("kether")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
          </svg>
        </Button>
        <Form.Control
          id="kether"
          step="any" 
          type="number"
          aria-label="Kether"
          value={values.kether}
          onChange={(e) => handleChange(e.target.value, "kether")}
        />
        <InputGroup.Text>Kether</InputGroup.Text>
      </InputGroup>

      <InputGroup className="input-group input-group-sm mb-3">
        <Button onClick={handleCopy("mether")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
          </svg>
        </Button>
        <Form.Control
          id="mether"
          step="any" 
          type="number"
          aria-label="Mether"
          value={values.mether}
          onChange={(e) => handleChange(e.target.value, "mether")}
        />
        <InputGroup.Text>Mether</InputGroup.Text>
      </InputGroup>

      <InputGroup className="input-group input-group-sm mb-3">
        <Button onClick={handleCopy("gether")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
          </svg>
        </Button>
        <Form.Control
          id="gether"
          step="any" 
          type="number"
          aria-label="Gether"
          value={values.gether}
          onChange={(e) => handleChange(e.target.value, "gether")}
        />
        <InputGroup.Text>Gether</InputGroup.Text>
      </InputGroup>

      <InputGroup className="input-group input-group-sm mb-3">
        <Button onClick={handleCopy("tether")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
          </svg>
        </Button>
        <Form.Control
          id="tether"
          step="any" 
          type="number"
          aria-label="Tether"
          value={values.tether}
          onChange={(e) => handleChange(e.target.value, "tether")}
        />
        <InputGroup.Text>Tether</InputGroup.Text>
      </InputGroup>
    </div>
  )
}

export default EthereumUnitConverter;