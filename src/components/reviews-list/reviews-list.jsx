import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import ReviewsItem from '../reviews-item/reviews-item.jsx';
import {getReviews} from '../../reducer/reviews/selectors';
import {Operation} from '../../reducer/reviews/reviews';

const propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  offerId: PropTypes.number.isRequired,
  loadReviews: PropTypes.func.isRequired,
};

class ReviewsList extends PureComponent {
  componentDidMount() {
    this.props.loadReviews(this.props.offerId);
  }

  render() {
    const {reviews} = this.props;

    return <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) =>
          <ReviewsItem
            key={review.id}
            review={review}
          />
        )}
      </ul>
    </>;
  }
}

const mapStateToProps = (state, ownProps) => ({...ownProps,
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (id) => dispatch(Operation.loadReviews(id))
});

ReviewsList.propTypes = propTypes;

export {ReviewsList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
