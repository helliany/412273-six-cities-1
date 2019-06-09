import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.REVIEWS;

export const getReviews = (state) => state[NAME_SPACE].reviews;
export const getOfferId = (state) => state[NAME_SPACE].offerId;
