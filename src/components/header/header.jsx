import React from "react";
import PropTypes from 'prop-types';

import {BASE_URL} from "../../constants";

const propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    avatarUrl: PropTypes.string,
  }).isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  onSignIn: PropTypes.func,
};

const defaultProps = {
  onSignIn: () => {},
};

const Header = (props) => {
  const {user, isAuthorizationRequired, onSignIn} = props;
  const {avatarUrl, email} = user;

  const userSpanClass = isAuthorizationRequired ? `login` : `user-name user__name`;
  const userImg = isAuthorizationRequired ? {} : {backgroundImage: `url(${BASE_URL}${avatarUrl})`};

  const _handleSignInLink = (evt) => {
    evt.preventDefault();
    if (Object.keys(user).length === 0) {
      onSignIn();
    }
  };

  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a className="header__logo-link header__logo-link--active">
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <a
                className="header__nav-link header__nav-link--profile"
                href="#"
                onClick={_handleSignInLink}
              >
                <div
                  className="header__avatar-wrapper user__avatar-wrapper"
                  style={avatarUrl ? userImg : {}}
                >
                </div>

                <span className={`header__${userSpanClass}`}>
                  {email ? email : `Sign in`}
                </span>

              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
