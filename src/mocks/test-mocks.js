const offers = [
  {
    city: `Amsterdam`,
    name: `Beautiful location`,
    type: `Apartment`,
    premium: true,
    price: 120,
    favorite: false,
    rating: 93,
    img: `path`,
    id: `offer-1`,
    coords: [52.3909553943508, 4.85309666406198],
  },
  {
    city: `Paris`,
    name: `Wood and stone place`,
    type: `Private room`,
    premium: false,
    price: 80,
    favorite: true,
    rating: 80,
    img: `path`,
    id: `offer-2`,
    coords: [52.369553943508, 4.85309666406198],
  },
];

const leaflet = {
  map() {
    return {
      setView: jest.fn(),
    };
  },
  icon() {
    jest.fn();
  },
  tileLayer() {
    return {
      addTo: jest.fn(),
    };
  },
  marker() {
    return {
      addTo: jest.fn(),
    };
  },
  layerGroup() {
    return {
      addTo: jest.fn(),
      clearLayers: jest.fn(),
    };
  }
};

const mapSettings = {
  center: [52, 4],
  zoom: 12,
  zoomControl: false,
  marker: true,
  icon: {
    iconUrl: `img/map-pin.svg`,
    iconSize: [30, 30]
  },
};

export {offers, leaflet, mapSettings};
