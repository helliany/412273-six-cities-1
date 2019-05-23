import React from "react";
import PropTypes from 'prop-types';

const propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCity: PropTypes.string.isRequired,
  onCityChange: PropTypes.func,
};

const defaultProps = {
  onCityChange: () => {},
};

const CitiesList = (props) => {
  const {cities, activeCity, onCityChange} = props;

  const _handleClick = (evt, city) => {
    evt.preventDefault();
    onCityChange(city);
  };

  return <ul className="locations__list tabs__list">
    {cities.map((city) =>
      <li className="locations__item" key={city}>
        <a className={`locations__item-link tabs__item
        ${city === activeCity ? `tabs__item--active` : ``}`}
        href="#"
        onClick={(evt) => _handleClick(evt, city)}
        >
          <span>{city}</span>
        </a>
      </li>
    )}
  </ul>;
};

CitiesList.propTypes = propTypes;
CitiesList.defaultProps = defaultProps;

export default CitiesList;
