import React, { Component } from 'react';

//components
import Layout from './components/Layout'
import Wizard from './components/Wizard'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Wizard />
        </Layout>
      </div>
    )
  }
}

export default App;
