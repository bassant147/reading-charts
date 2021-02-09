import React from 'react';
import {connect} from 'react-redux';

import {toggleMenu, setTitles} from '../actions';

class Button extends React.Component {
  constructor(props) {
    super(props);
    /* this.state = {
      menuVisible: false
    } */
    this.setChartTitles = this.setChartTitles.bind(this);
  }

  setChartTitles() {
    //this.setState(state => ({menuVisible: !state.menuVisible}))
    //console.log(this.state.menuVisible)
    this.props.toggleMenu(true);
    if(this.props.data){
      
      const titles = this.props.data.map(chart => chart.title);
      this.props.setTitles(titles);
    }        
  }

  render() {
    return (
      <button className="box--2" onClick={this.setChartTitles}>+ Add Chart</button>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.details
  }
}


export default connect(mapStateToProps, {toggleMenu, setTitles})(Button);