import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Button from './components/Button';
import Menu from './components/Menu';
import Chart from './components/Chart';

import {fetchData} from './actions';

class App extends Component { 
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="container">
          <h2 className="heading box--1">Internal dashboard</h2>
          <Button />
          {this.props.menuVisible && <Menu />}
          <Chart/>
      </div>
    );
  }    
}

const mapStateToProps = state => {
  return {
    menuVisible: state.display.menuVisible
  }
}

export default connect(mapStateToProps, {fetchData})(App);