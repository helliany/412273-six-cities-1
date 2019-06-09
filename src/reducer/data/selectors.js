import {createSelector} from 'reselect';

import NameSpace from '../name-spaces';
import {MaxItemsNumber} from '../../constants';

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => state[NAME_SPACE].offers;

export const getActiveCity = (state) => state[NAME_SPACE].city;

export const getSelectedOffers = createSelector(
    getOffers,
    getActiveCity,
    (offers, city) => offers.filter((offer) => offer.city.name === city.name),
);

export const getCities = createSelector(
    getOffers,
    (offers) => Array.from(new Set(offers.map((offer) => offer.city.name))).slice(MaxItemsNumber.MIN, MaxItemsNumber.MAX),
);
