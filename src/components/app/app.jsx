import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Switch, Route, Redirect} from "react-router-dom";
import camelCase from 'camelcase-keys';

import MainPage from "../main-page/main-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Favorites from "../favorites/favorites.jsx";
import Property from "../property/property.jsx";
import Header from "../header/header.jsx";
import withPrivateRoute from "../../hocs/with-private-route/with-private-route";
import {actionCreator} from '../../reducer/data/data';
import {actionCreator as userActionCreator} from '../../reducer/user/user';
import {getCities, getActiveCity, getSelectedOffers} from '../../reducer/data/selectors';
import {getUser} from '../../reducer/user/selectors';
import createAPI from '../../api';

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
  loadData: PropTypes.func.isRequired,
  onCityChange: PropTypes.func,
  onSignIn: PropTypes.func,
  onSignOut: PropTypes.func,
};

const defaultProps = {
  onCityChange: () => {},
  onSignIn: () => {},
  onSignOut: () => {},
};

class App extends React.Component {
  render() {
    const {
      offers,
      cities,
      activeCity,
      leaflet,
      mapSettings,
      onCityChange,
      user,
    } = this. props;

    const Main = () => <MainPage
      offers = {offers}
      cities = {cities}
      activeCity = {activeCity}
      leaflet = {leaflet}
      mapSettings = {mapSettings}
      onCityChange = {onCityChange}
    />;

    return <>
      <Header
        user={user}
      />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={SignIn} />
        <Route path="/favorites" exact component={withPrivateRoute(Favorites)} />
        <Route path="/offer/:id" exact render={({match}) => {
          return <Property
            offer={offers.find((it) => it.id === Number(match.params.id))}/>;
        }} />
        <Redirect to="/"/>
      </Switch>
    </>;
  }

  componentDidMount() {
    createAPI()
      .get(`/login`).then((response) => {
        const data = camelCase(response.data);
        this.props.onSignIn(data);
      }).catch(() => {
        this.props.onSignOut();
      });

    this.props.loadData();
  }
}

const mapStateToProps = (state, ownProps) => ({...ownProps,
  activeCity: getActiveCity(state),
  offers: getSelectedOffers(state),
  cities: getCities(state),
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city) => {
    dispatch(actionCreator.changeCity(city));
  },
  onSignIn: (user) => {
    dispatch(userActionCreator.signIn(user));
  },
  onSignOut: () => {
    dispatch(userActionCreator.signOut());
  },
  loadData: () =>
    createAPI().get(`/hotels`).then((response) => {
      const data = camelCase(response.data, {deep: true});
      dispatch(actionCreator.loadData(data));
    }),
});

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
