import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import MainPage from "../main-page/main-page.jsx";
import {actionCreator} from '../../reducer/data/data';
import {getCities, getActiveCity, getSelectedOffers} from '../../reducer/data/selectors';

const propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  leaflet: PropTypes.object.isRequired,
  mapSettings: PropTypes.object.isRequired,
  onCityChange: PropTypes.func,
  activeCity: PropTypes.object.isRequired,
};

const defaultProps = {
  onCityChange: () => {},
};

const App = (props) => {
  const {offers, cities, activeCity, leaflet, mapSettings, onCityChange} = props;

  return <>
    <MainPage
      offers = {offers}
      cities = {cities}
      activeCity = {activeCity}
      leaflet = {leaflet}
      mapSettings = {mapSettings}
      onCityChange = {onCityChange}
    />
  </>;
};

const mapStateToProps = (state, ownProps) => ({...ownProps,
  activeCity: getActiveCity(state),
  offers: getSelectedOffers(state),
  cities: getCities(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city) => {
    dispatch(actionCreator.changeCity(city));
  },
});

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
