import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./types";

import authService from "../../services/auth.service";

export const register = (username, email, password, firstName, lastName) => (dispatch) => {
    return authService.register(username, email, password, firstName, lastName).then(
        res => {
            dispatch({
                type: REGISTER_SUCCESS
            });

            dispatch({
                type: SET_MESSAGE,
                payload: res.data.message,
            });

            return Promise.resolve();
        },
        err => {
            const message =
                (err.response &&
                    err.response.data &&
                    err.response.data.message) ||
                err.message ||
                err.toString();
            dispatch({
                type: REGISTER_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    )
}

export const login = (email, password) => (dispatch) => {
    return authService.login(email, password).then(
        data => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    user: data
                }
            });

            return Promise.resolve();
        },
        err => {
            const message =
                (err.response &&
                    err.response.data &&
                    err.response.data.message) ||
                    err.message ||
                    err.toString();
            dispatch({
                type:LOGIN_FAIL,
            })
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    )
};

export const logout=()=>(dispatch)=>{
    authService.logout();
    dispatch({
        type: LOGOUT
    });
}

//mock api login session
export const SESSION_LOGIN = "SESSION_LOGIN"
export const SESSION_LOOUT = "SESSION_LOGOUT"
export const loginMockApi = (email,password) =>(dispatch)=>{
    dispatch({
        type:SESSION_LOGIN,
        data:{email:email}
    });
}
export const logoutMockApi = ()=>(dispatch)=>{
    dispatch({
        type:SESSION_LOOUT,
    })
}