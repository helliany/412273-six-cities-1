import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {compose} from "redux";
import {connect} from 'react-redux';

import {requireAuthorization} from '../../reducer/user/selectors';


const withPrivateRoute = (Component) => {
  return function WithPrivateRoute(props) {
    const propTypes = {
      isAuthorizationRequired: PropTypes.bool.isRequired
    };

    if (props.isAuthorizationRequired) {
      return <Redirect to="/login"/>;
    }

    WithPrivateRoute.propTypes = propTypes;

    return <Component {...props}/>;
  };
};

const mapStateToProps = (state, ownProps) => ({...ownProps,
  isAuthorizationRequired: requireAuthorization(state)
});

export default compose(
    connect(mapStateToProps, null),
    withPrivateRoute
);
