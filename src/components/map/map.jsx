import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

const propTypes = {
  coords: PropTypes.array.isRequired,
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
  render() {
    return (
      <div id="map"></div>
    );
  }

  componentDidMount() {
    this._initMap();
  }

  componentDidUpdate() {
    this.layerGroup.clearLayers();
    this._addMarkers(this.layerGroup);
  }

  _initMap() {
    const {leaflet, settings} = this.props;

    const map = leaflet.map(`map`, settings);
    map.setView(settings.center, settings.zoom);
    this.layerGroup = leaflet.layerGroup().addTo(map);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    this._addMarkers(this.layerGroup);
  }

  _addMarkers(layer) {
    const {coords, leaflet, settings} = this.props;

    coords.forEach((coord) => {
      leaflet
        .marker(coord, {icon: settings.icon})
        .addTo(layer);
    });
  }
}

Map.propTypes = propTypes;

export default Map;
