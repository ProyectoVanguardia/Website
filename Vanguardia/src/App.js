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
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config'


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
    this.setState({ account: accounts[0] })
    const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
    this.setState({ todoList })
    const taskCount = await todoList.methods.taskCount().call()
    this.setState({ taskCount })
    for (var i = 1; i <= taskCount; i++) {
      const task = await todoList.methods.tasks(i).call()
      this.setState({
        tasks: [...this.state.tasks, task]
      })
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      taskCount: 0,
      tasks: []

    }
  }


  render() {
    return (
      <Router>
        <GlobalStyle />

        <Hero />
        <Products heading='Escoge tu obra favorita!' data={productData} />
        <Feature />
        <Products heading='Tambien en discos de madera!' data={productDataTwo} />
        <Footer />
        <div className="container-fluid" style={{backgroundColor: 'black'}}>
          <div className="row">
            <main role="main" className="col-lg-12 d-flex justify-content-center">
              <div id="loader" className="text-center">
                <p className="text-center" style={{ color: 'white' }}>Quieres que te contactemos? Dejanos tu correo electronico!</p>
              </div>
              <div id="content">
                <form >
                  <input id="newTask" type="text" className="form-control" placeholder="Correo" required />
                  <input type="submit" placeholder="Add task..."  hidden="" />
                </form>
              </div>
            </main>
          </div>
        </div>
      </Router>
    );}
  
}

export default App;
