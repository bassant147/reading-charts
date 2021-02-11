import { combineReducers } from "redux";

const FETCH_DATA = 'FETCH_DATA';
const TOGGLE_MENU = 'TOGGLE_MENU';
const IS_CHART_SELECTED = 'IS_CHART_SELECTED';
const SET_TITLES = 'SET_TITLES';
const CHART_ID = 'CHART_ID';
const VISIBLE_CHARTS = 'VISIBLE_CHARTS';

const dataReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_DATA:
      return {...state, details: action.payload};
    case SET_TITLES:
      return {...state, titles: action.payload};    
    case CHART_ID:
      return {...state, selectedChart: action.payload};
    default:
      return state;
  }
}

const displayReducer = (state = {menuVisible: false, isChartSelected: false}, action) => {
  switch(action.type) {
    case TOGGLE_MENU:
      return {...state, menuVisible: action.payload};
    case IS_CHART_SELECTED:
      return {...state, isChartSelected: action.payload}
    default:
      return state;
  }
}

//const chartReducer = (state = [], action) => {
const chartReducer = (state = [], action) => {
  switch(action.type) {
    case VISIBLE_CHARTS:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default combineReducers({
  data: dataReducer,
  display: displayReducer,
  charts: chartReducer
});