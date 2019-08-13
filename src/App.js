import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
//import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";
import Web3Provider from "web3-react";
import connectors from "./Connectors.js";
import ActivateConnectors from "./components/ActivateConnectors.js";
import ENSRegistrationComponent from "./components/ENSRegistrationComponent.js";
import SetArweaveComponent from "./components/SetArweaveComponent.js";
import ArweaveRouterComponent from "./components/ArweaveRouterComponent"
import "./index.css";
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <HashRouter>
    <Switch>
    <Route exact path="/" render={() =>
    <Web3Provider connectors={connectors} libraryName="ethers.js">
      <Container className="App">
        <Row><div className='container text-center'><h1>ArwENS</h1></div></Row>
        <Row><div className='container text-center'>A simple Dapp for registering ENS domains and linking to content hosted on Arweave</div></Row>
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
            <SetArweaveComponent />
          </Col>
        </Row>
      </Container>
    </Web3Provider>}/>
    <Route path="/:id" render={(routeProps) =>       
      <Web3Provider connectors={connectors} libraryName="ethers.js">
        <Row><Col>
            <ActivateConnectors />
            <ArweaveRouterComponent domainName={routeProps.match.params.id} />
        </Col></Row>
      </Web3Provider>
    }
      /> 
    </Switch>
    </HashRouter>
  );
}

export default App;
