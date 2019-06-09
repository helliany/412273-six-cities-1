import React from "react";
import PropTypes from 'prop-types';

import {RATING_COEFFICIENT} from '../../constants';

const propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

const ReviewsItem = (props) => {
  const {review: {user, rating, comment, date}} = props;

  const _getRating = () => `${rating * RATING_COEFFICIENT}%`;

  const _getDateTime = () => {
    if (date !== ``) {
      const newDate = Date.parse(date);
      return new Date(newDate).toISOString().substr(0, 10);
    }
    return null;
  };

  const _getDate = () => {
    if (date !== ``) {
      const newDate = Date.parse(date);
      const settings = {year: `numeric`, month: `long`};
      return new Date(newDate).toLocaleString(`en-US`, settings);
    }
    return null;
  };

  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={`${user.avatarUrl}`} width="54" height="54" alt="Reviews avatar" />
      </div>
      <span className="reviews__user-name">{user.name}</span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: _getRating()}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">{comment}</p>
      <time className="reviews__time" dateTime={_getDateTime()}>{_getDate()}</time>
    </div>
  </li>;
};

ReviewsItem.propTypes = propTypes;

export default ReviewsItem;
