import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import camelCase from 'camelcase-keys';

import createAPI from '../../api';
import {actionCreator} from '../../reducer/user/user';

const propTypes = {
  onChangeAuthorization: PropTypes.func.isRequired,
};

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``,
    };

    this._handleInputValue = this._handleInputValue.bind(this);
    this._sendForm = this._sendForm.bind(this);
  }

  render() {
    return <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action="#"
            method="post"
            onSubmit={this._sendForm}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required=""
                onChange={this._handleInputValue}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required=""
                onChange={this._handleInputValue}
              />
            </div>
            <button
              className="login__submit form__submit button"
              type="submit"
              disabled={!this.state.email || !this.state.password}
            >Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>;
  }

  _handleInputValue(evt) {
    this.setState({[evt.target.name]: evt.target.value});
  }

  _sendForm(evt) {
    evt.preventDefault();
    this.props.onChangeAuthorization(this.state);
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeAuthorization: (data) => {
    createAPI(dispatch)
      .post(`/login`, data).then((response) => {
        const responseData = camelCase(response.data);
        dispatch(actionCreator.signIn(responseData));
        ownProps.history.push(`/`);
      }).catch(() => {
        actionCreator.signOut();
      });
  }
});

SignIn.propTypes = propTypes;

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
