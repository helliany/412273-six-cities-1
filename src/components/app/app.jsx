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
  selectedOffers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    favorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  leaflet: PropTypes.object.isRequired,
  mapSettings: PropTypes.object.isRequired,
  onCityChange: PropTypes.func,
  activeCity: PropTypes.string.isRequired,
};

const defaultProps = {
  onCityChange: () => {},
};

const App = (props) => {
  const {offers, selectedOffers, activeCity, leaflet, mapSettings, onCityChange} = props;

  return <>
    <MainPage
      offers = {offers}
      selectedOffers = {selectedOffers}
      activeCity = {activeCity}
      leaflet = {leaflet}
      mapSettings = {mapSettings}
      onCityChange = {onCityChange}
    />
  </>;
};

const mapStateToProps = (state, ownProps) => ({...ownProps,
  activeCity: state.city,
  offers: state.offers,
  selectedOffers: state.selectedOffers,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city) => {
    dispatch(actionCreator.changeCity(city));
    dispatch(actionCreator.getOffers());
  },
});

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
