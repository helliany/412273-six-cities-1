import React from "react";
import PropTypes from 'prop-types';
import LocationItem from "../location-item/location-item.jsx";

const propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    active: PropTypes.bool,
  })).isRequired,
};

const LocationList = (props) => {
  const {locations} = props;

  return <ul className="locations__list tabs__list">
    {locations.map((location, id) =>
      <LocationItem
        location={location}
        key={id}
      />
    )}
  </ul>;
};

LocationList.propTypes = propTypes;

export default LocationList;
