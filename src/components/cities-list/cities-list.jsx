import React from "react";
import PropTypes from 'prop-types';

import withActiveItem from '../../hocs/with-active-item';

const propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCity: PropTypes.string,
  onCityChange: PropTypes.func,
  onActiveItemChange: PropTypes.func,
};

const defaultProps = {
  activeCity: ``,
  onCityChange: () => {},
  onActiveItemChange: () => {},
};

const CitiesList = (props) => {
  const {cities, activeCity, onCityChange, onActiveItemChange} = props;

  const _handleClick = (evt, city) => {
    evt.preventDefault();
    onActiveItemChange(city);
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

const WrappedCitiesList = withActiveItem(CitiesList);

CitiesList.propTypes = propTypes;
CitiesList.defaultProps = defaultProps;

export default WrappedCitiesList;
