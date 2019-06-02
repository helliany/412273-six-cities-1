import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.USER;

export const requireAuthorization = (state) => state[NAME_SPACE].isAuthorizationRequired;

export const getUser = (state) => state[NAME_SPACE].user;
