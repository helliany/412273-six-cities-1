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
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="cities__map map" id="map" />
    );
  }

  componentDidMount() {
    this._initMap();
  }

  _initMap() {
    const {offers, leaflet} = this.props;

    const Settings = {
      center: [52.38333, 4.9],
      zoom: 12,
      zoomControl: false,
      marker: true,
      icon: leaflet.icon({
        iconUrl: `img/map-pin.svg`,
        iconSize: [30, 30]
      }),
    };

    const map = leaflet.map(`map`, Settings);

    map.setView(Settings.center, Settings.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.forEach((offer) => {
      leaflet
        .marker(offer.coords, {icon: Settings.icon})
        .addTo(map);
    });
  }
}

Map.propTypes = propTypes;

export default Map;
