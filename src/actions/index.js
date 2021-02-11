import axios from 'axios';

const FETCH_DATA = 'FETCH_DATA';
const TOGGLE_MENU = 'TOGGLE_MENU';
const IS_CHART_SELECTED = 'IS_CHART_SELECTED';
const SET_TITLES = 'SET_TITLES';
const CHART_ID = 'CHART_ID';
const VISIBLE_CHARTS = 'VISIBLE_CHARTS';

export const fetchData =  () => {  
  return async (dispatch) => {
    const request = await axios.get('http://localhost:4000/data')
    dispatch({
      type: FETCH_DATA,
      payload: request.data
    });
  }
}

export const toggleMenu = (visible) => {
  return {
    type: TOGGLE_MENU,
    payload: visible
  }
}

export const setChartSelected = (selected) => {
  return {
    type: IS_CHART_SELECTED,
    payload: selected
  }
}

export const setTitles = (titles) => {
  return {
    type: SET_TITLES,
    payload: titles
  }
}

export const setChartId = (id) => {
  return {
    type: CHART_ID,
    payload: id
  }
}

export const setChartTitleAndData = (data) => {
  return {
    type: VISIBLE_CHARTS,
    payload: data
  }
}