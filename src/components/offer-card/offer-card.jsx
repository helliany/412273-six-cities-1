import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {RATING_COEFFICIENT} from '../../constants';

const propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
  }).isRequired,
  active: PropTypes.number,
  onImgClick: PropTypes.func,
};

const defaultProps = {
  active: 0,
  onImgClick: () => {},
};

const OfferCard = (props) => {
  const {offer, active, onImgClick} = props;
  const {rating, id, isPremium, previewImage, price, isFavorite, title, type} = offer;

  const activeCard = active ? `cities__place-card--active` : ``;
  const getRating = () => `${rating * RATING_COEFFICIENT}%`;

  const _handleImgLink = (evt) => {
    evt.preventDefault();
    onImgClick(id);
  };

  return <article className={`cities__place-card place-card ${activeCard}`} id={`${id}`}>

    {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}

    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#" onClick={_handleImgLink}>
        <img className="place-card__image" src={`${previewImage}`} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>

        <button className={`place-card__bookmark-button
          ${isFavorite ? `place-card__bookmark-button--active` : ``} button`}
        type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">
            {`${isFavorite ? `In bookmarks` : `To bookmarks`}`}
          </span>
        </button>

      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: getRating()}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${id}`} >{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>;
};

OfferCard.propTypes = propTypes;
OfferCard.defaultProps = defaultProps;

export default OfferCard;
