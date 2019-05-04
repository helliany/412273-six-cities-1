import React from "react";
import PropTypes from 'prop-types';
import PlaceCardItem from "../place-card-item/place-card-item.jsx";

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
};

const PlaceCardList = (props) => {
  const {places} = props;

  return <div className="cities__places-list places__list tabs__content">
    {places.map((place, id) =>
      <PlaceCardItem
        place={place}
        key={id}
      />
    )}
  </div>;
};

PlaceCardList.propTypes = propTypes;

export default PlaceCardList;
