const offers = [
  {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    title: `Beautiful location`,
    type: `Apartment`,
    isPremium: true,
    price: 120,
    isFavorite: false,
    rating: 4,
    previewImage: `path`,
    id: 1,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
  },
  {
    city: {
      name: `Paris`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    title: `Wood and stone place`,
    type: `Private room`,
    isPremium: false,
    price: 80,
    isFavorite: true,
    rating: 4.5,
    previewImage: `path`,
    id: 2,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
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
