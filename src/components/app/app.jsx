import React from "react";
import PropTypes from 'prop-types';
import Header from "../header/header.jsx";
import MainPage from "../main-page/main-page.jsx";

const propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    premium: PropTypes.bool,
    price: PropTypes.number,
    favorite: PropTypes.bool,
    rating: PropTypes.number,
    img: PropTypes.string,
  })).isRequired,
  locations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    active: PropTypes.bool,
  })).isRequired,
};

const App = (props) => {
  const {places, locations} = props;

  return <div>
    <Header />
    <MainPage
      locations={locations}
      places={places}
    />
  </div>;
};

App.propTypes = propTypes;

export default App;
