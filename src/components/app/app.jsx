import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import MainPage from "../main-page/main-page.jsx";
import {actionCreator} from '../../reducer';

const propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    favorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  cities: PropTypes.array.isRequired,
  leaflet: PropTypes.object.isRequired,
  mapSettings: PropTypes.object.isRequired,
  onCityChange: PropTypes.func,
  activeCity: PropTypes.string.isRequired,
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
  activeCity: state.city,
  cities: Array.from(new Set(state.offers.map((offer) => offer.city))).slice(0, 6),
  offers: state.offers.filter((offer) => offer.city === state.city),
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city) => dispatch(actionCreator.changeCity(city)),
});

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
