import actionTypes from './actionsTypes';

import * as services from '../services/api';

export function loginStart() {
    return {
        type: actionTypes.LOGIN_START
    };
}

export function loginSuccess(user) {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: { user }
    };
}

export function loginError(err) {
    return {
        type: actionTypes.LOGIN_ERROR,
        payload: { err }
    };
}

export function registerStart() {
    return {
        type: actionTypes.REGISTER_START
    };
}

export function registerSuccess(user) {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        payload: { user }
    };
}

export function registerError(err) {
    return {
        type: actionTypes.REGISTER_ERROR,
        payload: { err }
    };
}

export function logoutStart() {
    return {
        type: actionTypes.LOGOUT_START
    };
}

export function logoutSuccess() {
    return {
        type: actionTypes.LOGOUT_SUCCESS
    };
}

export function logoutError() {
    return {
        type: actionTypes.LOGOUT_ERROR
    };
}

export function login(username, password) {
    return dispatch => {
        dispatch(loginStart());

        services.loginService(username, password).then(
            response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('username', username);
                dispatch(loginSuccess(response.data.user));
            },
            err => {
                dispatch(loginError(err));
            }
        );
    };
}

export function register(username,email, password) {
    return dispatch => {
        dispatch(registerStart());

        services.registerService(username,email, password).then(
            response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('username', username);
                const user = { username };
                dispatch(registerSuccess(user));
            },
            err => {
                dispatch(registerError(err));
            }
        );
    };
}

export function logout() {
    return dispatch => {
        services.logoutService();

        dispatch(logoutSuccess());
    };
}
