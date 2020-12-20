import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import { render } from '@testing-library/react';
import Web3 from 'web3'


class App extends Component {  
  componentWillMount() {
    this.loadBlockchainData()
  }
  
  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const network = await web3.eth.net.getNetworkType()
    const ethereum = window.ethereum;
    const enabledWeb3 = await ethereum.enable();
    const accounts = await web3.eth.getAccounts()
    console.log("account", accounts[0])
    this.setState({ account: accounts[0] })


  }
  
  constructor(props) {
    super(props)
    this.state = {account: ''
    }
  }


  render(){
    return (  
      <Router>
        <GlobalStyle />
        <Hero />
        <Products heading='Escoge tu obra favorita!' data={productData} />
        <Feature />
        <Products heading='Tambien en discos de madera!' data={productDataTwo} />
        <Footer />
      </Router>
    );}
  
}

export default App;
