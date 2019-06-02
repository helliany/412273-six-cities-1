import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import MainPage from "../main-page/main-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Header from "../header/header.jsx";
import {actionCreator} from '../../reducer/data/data';
import {actionCreator as userActionCreator} from '../../reducer/user/user';
import {getCities, getActiveCity, getSelectedOffers} from '../../reducer/data/selectors';
import {requireAuthorization, getUser} from '../../reducer/user/selectors';

const propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
  })).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  leaflet: PropTypes.object.isRequired,
  mapSettings: PropTypes.object.isRequired,
  activeCity: PropTypes.object.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    avatarUrl: PropTypes.string,
  }).isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  onSignIn: PropTypes.func,
  onCityChange: PropTypes.func,
};

const defaultProps = {
  onCityChange: () => {},
  onSignIn: () => {},
};

const App = (props) => {
  const {
    offers,
    cities,
    activeCity,
    leaflet,
    mapSettings,
    onCityChange,
    user,
    isAuthorizationRequired,
    onSignIn,
  } = props;

  const Main = <MainPage
    offers = {offers}
    cities = {cities}
    activeCity = {activeCity}
    leaflet = {leaflet}
    mapSettings = {mapSettings}
    onCityChange = {onCityChange}
  />;

  const SignInPage = <SignIn/>;

  const appPage = isAuthorizationRequired ? SignInPage : Main;

  return <>
    <Header
      user={user}
      isAuthorizationRequired={isAuthorizationRequired}
      onSignIn={onSignIn}
    />
    {appPage}
  </>;
};

const mapStateToProps = (state, ownProps) => ({...ownProps,
  activeCity: getActiveCity(state),
  offers: getSelectedOffers(state),
  cities: getCities(state),
  user: getUser(state),
  isAuthorizationRequired: requireAuthorization(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city) => {
    dispatch(actionCreator.changeCity(city));
  },
  onSignIn: () => {
    dispatch(userActionCreator.requireAuthorization(true));
  }
});

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
