import React, { Component } from 'react';
import MuithemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

class App extends Component {
  render() {
    return (
      <MuithemeProvider>
        <NavBar/>
        <Search/>
      </MuithemeProvider>
    )
  }
}

export default App;
