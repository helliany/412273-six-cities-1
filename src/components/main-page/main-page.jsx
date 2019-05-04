import React from "react";
import PropTypes from 'prop-types';
import PlaceCardList from "../place-card-list/place-card-list.jsx";
import LocationList from "../location-list/location-list.jsx";

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

const MainPage = (props) => {
  const {places, locations} = props;

  return <div>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="cities tabs">
        <section className="locations container">

          <LocationList locations={locations} />

        </section>
      </div>
      <div className="cities__places-wrapper">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>

            <PlaceCardList places={places} />

          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  </div>;
};

MainPage.propTypes = propTypes;

export default MainPage;
