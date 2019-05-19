import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

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
  leaflet: PropTypes.object.isRequired,
  settings: PropTypes.shape({
    center: PropTypes.array.isRequired,
    zoom: PropTypes.number.isRequired,
    zoomControl: PropTypes.bool.isRequired,
    marker: PropTypes.bool.isRequired,
    icon: PropTypes.object.isRequired,
  }).isRequired,
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="map"></div>
    );
  }

  componentDidMount() {
    this._initMap();
  }

  _initMap() {
    const {offers, leaflet, settings} = this.props;

    const map = leaflet.map(`map`, settings);
    map.setView(settings.center, settings.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.forEach((offer) => {
      leaflet
        .marker(offer.coords, {icon: settings.icon})
        .addTo(map);
    });
  }
}

Map.propTypes = propTypes;

export default Map;
