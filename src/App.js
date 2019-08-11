import React from 'react';
//import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";
import Web3Provider from "web3-react";
import connectors from "./Connectors.js";
import ActivateConnectors from "./components/ActivateConnectors.js";
import ENSRegistrationComponent from "./components/ENSRegistrationComponent.js";
import SetArweaveComponent from "./components/SetArweaveComponent.js";
import ArweaveComponent from "./components/ArweaveComponent"
import "./index.css";
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <Web3Provider connectors={connectors} libraryName="ethers.js">
      <Container className="App">
        <Row>
          <Col>
            <ActivateConnectors />
          </Col>
        </Row>
        <Row>
          <Col>
            <ENSRegistrationComponent />
          </Col>
        </Row>
        <Row>
          <Col>
            <ArweaveComponent />
          </Col>
          </Row>
        <Row>
          <Col>
            <SetArweaveComponent />
          </Col>
        </Row>
      </Container>
    </Web3Provider>
  );
}

export default App;
