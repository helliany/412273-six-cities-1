import React from "react";
import PropTypes from 'prop-types';
import OfferCard from "../offer-card/offer-card.jsx";

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
  activeItem: PropTypes.string,
  onTitleClick: PropTypes.func,
  onActiveItemChange: PropTypes.func,
};

const defaultProps = {
  activeItem: ``,
  onTitleClick: () => {},
  onActiveItemChange: () => {},
};

const OfferCardList = (props) => {
  const {offers, activeItem, onTitleClick, onActiveItemChange} = props;

  const _handleImgClick = (i) => {
    onActiveItemChange(i);
  };

  return <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) =>
      <OfferCard
        offer={offer}
        key={offer.id}
        active={activeItem === offer.id ? activeItem : ``}
        onTitleClick={onTitleClick}
        onImgClick={_handleImgClick}
      />
    )}
  </div>;
};

OfferCardList.propTypes = propTypes;
OfferCardList.defaultProps = defaultProps;

export default OfferCardList;
