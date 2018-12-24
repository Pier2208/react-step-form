import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

//components
import Layout from './components/Layout'
import Wizard from './components/Wizard'



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Layout>
            <Wizard />
          </Layout>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
