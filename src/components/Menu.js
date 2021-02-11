import React from 'react';
import {connect} from 'react-redux';
import {setChartId, toggleMenu, setChartSelected} from '../actions';

class Menu extends React.Component {
  selectChart(id) {
    this.props.setChartId(id);
    this.props.setChartSelected(true);
    this.props.toggleMenu(false);
  }

  renderTitles = () => {
      return this.props.chartTitles.map((title, idx) => 
      <li className={`menuItem menuItem--${idx}`} key={idx} onClick={() => this.selectChart(idx)}>
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

export default connect(mapStateToProps, {setChartId, toggleMenu, setChartSelected})(Menu);