const offers = [
  {
    id: 1,
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
    bedrooms: 3,
    maxAdults: 4,
    isPremium: true,
    price: 120,
    isFavorite: false,
    rating: 4,
    previewImage: `path`,
    images: [`path1`, `path2`],
    goods: [`Heating`, `Kitchen`],
    host: {
      id: 1,
      isPro: true,
      name: `Angelina`,
      avatarUrl: `path`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
  },
  {
    id: 2,
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
    bedrooms: 3,
    maxAdults: 4,
    isPremium: false,
    price: 80,
    isFavorite: true,
    rating: 4.5,
    previewImage: `path`,
    images: [`path1`, `path2`],
    goods: [`Heating`, `Kitchen`],
    host: {
      id: 1,
      isPro: true,
      name: `Angelina`,
      avatarUrl: `path`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
  },
];

const reviews = [
  {
    id: 1,
    user: {
      id: 1,
      isPro: false,
      name: `Max`,
      avatarUrl: `path`,
    },
    rating: 4,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
  },
  {
    id: 2,
    user: {
      id: 2,
      isPro: true,
      name: `Oliver`,
      avatarUrl: `path`,
    },
    rating: 2,
    comment: `The deluxe room was a quite comfortable one with all the adequate facilities.`,
    date: `2019-05-08T14:13:56.569Z`,
  }
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

export {offers, reviews, leaflet, mapSettings};
