import React from 'react';
import {connect} from 'react-redux';
import {setChartId, toggleMenu} from '../actions';

class Menu extends React.Component {
  selectChart(id) {
    console.log(id);
    this.props.setChartId(id);
    this.props.toggleMenu(false);
  }

  renderTitles = () => {
      console.log(this.props.chartTitles);
      return this.props.chartTitles.map((title, idx) => 
      <li className="menuItem" key={idx} onClick={() => this.selectChart(idx)}>
        {title}
      </li>)
  }

  render() {
    
    return (
        <ul className="menu box--3">
          {this.renderTitles()}
        </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    chartTitles: state.data.titles
  }
}

export default connect(mapStateToProps, {setChartId, toggleMenu})(Menu);