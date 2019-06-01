import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

const propTypes = {
  coords: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.object,
  leaflet: PropTypes.object.isRequired,
  settings: PropTypes.shape({
    zoom: PropTypes.number.isRequired,
    zoomControl: PropTypes.bool.isRequired,
    marker: PropTypes.bool.isRequired,
    icon: PropTypes.object.isRequired,
  }).isRequired,
};

class Map extends PureComponent {
  render() {
    return (
      <div id="map"></div>
    );
  }

  componentDidMount() {
    try {
      this._initMap();
    } catch (e) {
      // data isn't loaded
    }
  }

  componentDidUpdate() {
    if (this.map) {
      this.map.remove();
      this._initMap();

    } else {
      this._initMap();
    }
  }

  _initMap() {
    const {
      leaflet,
      settings,
      location: {latitude, longitude, zoom},
    } = this.props;

    this.map = leaflet.map(`map`, settings);
    this.map.setView([latitude, longitude], zoom);
    const layerGroup = leaflet.layerGroup().addTo(this.map);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this._addMarkers(layerGroup);
  }

  _addMarkers(layer) {
    const {coords, leaflet, settings} = this.props;

    coords.forEach((coord) => {
      leaflet
        .marker([coord.latitude, coord.longitude], {icon: settings.icon})
        .addTo(layer);
    });
  }
}

Map.propTypes = propTypes;

export default Map;
