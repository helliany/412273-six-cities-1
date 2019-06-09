import React from "react";
import PropTypes from 'prop-types';

import ReviewsList from '../reviews-list/reviews-list.jsx';
import ReviewsForm from '../reviews-form/reviews-form.jsx';
import OfferCardList from '../offer-card-list/offer-card-list.jsx';
import Map from '../map/map.jsx';
import {RATING_COEFFICIENT, OffersNearNumber, MaxItemsNumber} from '../../constants';

const propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    isPremium: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  offerId: PropTypes.number.isRequired,
  leaflet: PropTypes.object.isRequired,
  mapSettings: PropTypes.object.isRequired,
};

const Property = (props) => {
  const {offers, offerId, leaflet, mapSettings} = props;
  const offer = offers.find((it) => it.id === offerId);
  const offersNear = offers.slice(OffersNearNumber.MIN, OffersNearNumber.MAX);
  const {images, isPremium, title, isFavorite, rating, bedrooms, maxAdults, price,
    goods, host, description, city} = offer;

  const coords = offersNear.map((it) => it.location);
  const countedImages = images.slice(MaxItemsNumber.MIN, MaxItemsNumber.MAX);
  const bedroomsNumber = `${bedrooms} ${bedrooms > 1 ? `Bedrooms` : `Bedroom`}`;
  const adultsNumber = `${maxAdults} ${maxAdults > 1 ? `adults` : `adult`}`;

  const _getRating = () => `${rating * RATING_COEFFICIENT}%`;

  return <main className="page__main page__main--property">
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">

          {countedImages.map((img) =>
            <div className="property__image-wrapper" key={img}>
              <img className="property__image" src={img} alt="Photo studio" />
            </div>
          )}

        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium &&
          <div className="property__mark">
            <span>Premium</span>
          </div>}
          <div className="property__name-wrapper">
            <h1 className="property__name">{title}</h1>
            <button className={`property__bookmark-button button
            ${isFavorite ? `property__bookmark-button--active` : ``} button`}
            type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">
                {`${isFavorite ? `In bookmarks` : `To bookmarks`}`}
              </span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: _getRating()}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{_getRating()}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
            Entire place
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedroomsNumber}
            </li>
            <li className="property__feature property__feature--adults">
              {adultsNumber}
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">

              {goods.map((good) =>
                <li className="property__inside-item" key={good}>{good}</li>
              )}

            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src={`${host.avatarUrl}`} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="property__user-name">
                {host.name}
              </span>
              {host.isPro &&
              <span className="property__user-status">
                Pro
              </span>}
            </div>
            <div className="property__description">
              <p className="property__text">
                {description}
              </p>
            </div>
          </div>
          <section className="property__reviews reviews">

            <ReviewsList offerId={offerId}/>
            <ReviewsForm />

          </section>
        </div>
      </div>
      <section className="property__map map">
        <Map
          coords={coords}
          location={city.location}
          leaflet={leaflet}
          settings={mapSettings}
        />
      </section>
    </section>
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          <OfferCardList
            offers={offersNear}
          />
        </div>
      </section>
    </div>
  </main>;
};

Property.propTypes = propTypes;

export default Property;
