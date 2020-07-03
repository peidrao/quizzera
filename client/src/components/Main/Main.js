import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.module.scss';

import Home from './Home';
import RegisterFormik from './Forms/RegisterFormik';

import LoginFormik from './Forms/LoginFormik';
 import Quiz from '../Quiz/index'; 

const RouteUnauthenticated = ({ user, ...props }) =>
    !Object.keys(user).length ? <Route {...props} /> : <Redirect to="/" />;

const RouteAuthenticated = ({ user, ...props }) =>
    Object.keys(user).length ? <Route {...props} /> : <Redirect to="/" />;

RouteUnauthenticated.propTypes = {
    user: PropTypes.shape.isRequired
};

RouteAuthenticated.propTypes = {
    user: PropTypes.shape.isRequired
};

class Main extends Component {
    render() {
        const { user } = this.props;

        return (
            <main>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Home {...this.props} />}
                    />
    
                     
                    <RouteAuthenticated
                        {...this.props}
                        exact
                        path="/go-quiz"
                        component={Quiz}
                    />
                    <RouteUnauthenticated
                        {...this.props}
                        exact
                        path="/login"
                        render={() => <LoginFormik {...this.props} />}
                    />
                    <RouteUnauthenticated
                        {...this.props}
                        exact
                        path="/register"
                        render={() => <RegisterFormik {...this.props} />}
                    />
                </Switch>
            </main>
        );
    }
}

export default Main;
