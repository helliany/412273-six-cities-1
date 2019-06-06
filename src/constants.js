const BASE_URL = `https://es31-server.appspot.com/six-cities`;

const ResponseStatus = {
  OK: 200,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
};

const mapSettings = {
  zoom: 12,
  zoomControl: false,
  marker: true,
};

const CitiesNumber = {
  MIN: 0,
  MAX: 6,
};

const RATING_COEFFICIENT = 20;

export {
  BASE_URL,
  ResponseStatus,
  mapSettings,
  CitiesNumber,
  RATING_COEFFICIENT
};
