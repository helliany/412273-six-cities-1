import React, {PureComponent} from "react";
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
  onTitleClick: PropTypes.func,
};

const defaultProps = {
  onTitleClick: () => {},
};

class OfferCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this._handleImgClick = this._handleImgClick.bind(this);
  }

  render() {
    const {offers, onTitleClick} = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <OfferCard
          offer={offer}
          key={offer.id}
          onTitleClick={onTitleClick}
          onImgClick={this._handleImgClick}
        />
      )}
    </div>;
  }

  _handleImgClick(cardId) {
    this.setState({
      activeCard: cardId,
    });
  }
}

OfferCardList.propTypes = propTypes;
OfferCardList.defaultProps = defaultProps;

export default OfferCardList;
