import React from "react";
import PropTypes from 'prop-types';

const propTypes = {
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    favorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func,
  onImgClick: PropTypes.func,
};

const OfferCard = (props) => {
  const {offer, onTitleClick, onImgClick} = props;

  return <article className="cities__place-card place-card" id={`${offer.id}`}>

    {offer.premium ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div> : ``}

    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#" onClick={(evt) => {
        evt.preventDefault();
        onImgClick(offer.id);
      }}>
        <img className="place-card__image" src={`img/${offer.img}`} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>

        <button className={`place-card__bookmark-button
          ${offer.favorite ? `place-card__bookmark-button--active` : ``} button`}
        type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">
            {`${offer.favorite ? `In bookmarks` : `To bookmarks`}`}
          </span>
        </button>

      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${offer.rating}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#" onClick={onTitleClick}>{offer.name}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>;
};

OfferCard.propTypes = propTypes;

export default OfferCard;
