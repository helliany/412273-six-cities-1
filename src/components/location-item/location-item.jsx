import React from "react";
import PropTypes from 'prop-types';

const propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    active: PropTypes.bool,
  }).isRequired
};

const LocationItem = (props) => {
  const {location} = props;

  return <li className="locations__item">
    <a className={`locations__item-link tabs__item
      ${location.active ? `tabs__item--active` : ``}`} href="#">
      <span>{location.name}</span>
    </a>
  </li>;
};

LocationItem.propTypes = propTypes;

export default LocationItem;
