import React from "react";
import PropTypes from 'prop-types';

import OfferCard from "../offer-card/offer-card.jsx";
import withActiveItem from '../../hocs/with-active-item/with-active-item';

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
  activeItem: PropTypes.number,
  onTitleClick: PropTypes.func,
  onActiveItemChange: PropTypes.func,
};

const defaultProps = {
  activeItem: 0,
  onTitleClick: () => {},
  onActiveItemChange: () => {},
};

const OfferCardList = ({offers, activeItem, onTitleClick, onActiveItemChange}) => {
  const _handleImgClick = (item) => {
    onActiveItemChange(item);
  };

  return <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) =>
      <OfferCard
        offer={offer}
        key={offer.id}
        active={activeItem === offer.id ? activeItem : undefined}
        onTitleClick={onTitleClick}
        onImgClick={_handleImgClick}
      />
    )}
  </div>;
};

const WrappedOfferCardList = withActiveItem(OfferCardList);

OfferCardList.propTypes = propTypes;
OfferCardList.defaultProps = defaultProps;

export default WrappedOfferCardList;
