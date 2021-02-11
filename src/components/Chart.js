import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';

import {toggleMenu, setChartTitleAndData, setChartSelected} from '../actions';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charts: [],
      chartsId: []
    }
    this.handlingChartData = this.handlingChartData.bind(this);
    this.renderCharts = this.renderCharts.bind(this);
  }

  componentDidMount() {
    console.log(`chart componentDidMount, selectedChartId: ${this.props.selectedChart}`)
    this.handlingChartData();
    
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('chart shouldComponentUpdate')
    return this.props.isChartSelected !== nextProps.isChartSelected;
  }

  componentDidUpdate() {   
    console.log('chart componentDidUpdate');
    this.handlingChartData();     
  }

  handlingChartData() {
    if(this.props.isChartSelected) {
      console.log('chart handlingchartdata')
      const allData = this.props.allData;
      const selectedChartId = this.props.selectedChart;

      const selectedChartDetails = allData[selectedChartId];
      if((!this.state.chartsId.find(id => id === selectedChartId)) && (this.state.chartsId.find(id => id === selectedChartId) !== 0)) { 
        console.log(this.state.chartsId.find(id => id === selectedChartId))
        const chartData = {
          labels: selectedChartDetails.data.map(item => item.name),
          datasets: [
            {
              label: selectedChartDetails.title,
              data: selectedChartDetails.data.map(item => item.Count),
              backgroundColor: 'rgba(44, 130, 201, 1)'
            }
          ]
        };
        this.setState(state => ({charts: [...state.charts, chartData], chartsId: [...state.chartsId, selectedChartId]}), () => {
          console.log(this.state.charts);
        });
        this.props.setChartSelected(false);
        //this.props.setChartTitleAndData(this.props.visibleCharts);
      }     
      
    }    
  }

  renderCharts() {
      console.log('chart renderCharts')
      
      return this.state.charts.map((chartData, i) => {
        return (<div key={i} className="chart">
            <Bar 
              data={chartData}
              width={80}
              height={240}
              options={{ maintainAspectRatio: false }}
        />
          </div>
        );})
    }
  
  
  render() {
    //console.log(this.state.charts);
    console.log('chart render')
    
    return (
        <ul className="charts box--4">
          {this.renderCharts()}
        </ul>  
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedChart: state.data.selectedChart,
    allData: state.data.details,
    visibleCharts: state.charts,
    isChartSelected: state.display.isChartSelected
    //charts: state.charts
  }
}

export default connect(mapStateToProps, {toggleMenu, setChartTitleAndData, setChartSelected})(Chart);