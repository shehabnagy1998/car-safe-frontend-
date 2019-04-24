import axios from 'axios';
import {
    BASE_URL_HELPERS,
    BASE_URL_USER,
    BASE_URL_FOUND,
    BASE_URL_LOST,
    ADD,
    REMOVE,
    GET,
    SIGNIN,
    SIGNUP,
    GET_BRANDS,
    GET_COLORS,

    REDUX_LOST,
    REDUX_FOUND,
    REDUX_BRANDS,
    REDUX_COLORS,
    REDUX_LOADING,
    REDUX_SIGN,
    REDUX_ROUTER
} from '../constants/CONSTANTS'


export const signIn = (info) => {
    return (dispatch, getState) => {
        dispatch({ type: REDUX_LOADING, value: true })
        axios({
            baseURL: BASE_URL_USER,
            url: SIGNIN,
            method: 'POST',
            data: info

        })
            .then(res => {
                dispatch({ type: REDUX_LOADING, value: false });
                dispatch({ type: REDUX_SIGN, value: res.data });
                localStorage.setItem('car-safe', `${info.email}!${info.pass}`);
                getState().history.push('/');
            })
            .catch(err => {
                if (err.response) {
                    alert('wrong email or NID')
                } else {
                    console.log(err)
                }
                dispatch({ type: REDUX_LOADING, value: false })
            })
    }
}

export const signUp = (info) => {
    return (dispatch, getState) => {
        dispatch({ type: REDUX_LOADING, value: true })
        axios({
            baseURL: BASE_URL_USER,
            url: SIGNUP,
            method: 'POST',
            data: info

        })
            .then(res => {
                dispatch({ type: REDUX_LOADING, value: false });
                dispatch({ type: REDUX_SIGN, value: res.data });
                localStorage.setItem('car-safe', `${info.email}!${info.pass}`);
                getState().history.push('/');
            })
            .catch(err => {
                if (err.response) {
                    alert('this email not available')
                } else {
                    console.log(err)
                }
                dispatch({ type: REDUX_LOADING, value: false })
            })
    }
}

export const signOut = () => {
    return (dispatch, getState) => {
        dispatch({ type: REDUX_SIGN, value: {} })
        localStorage.removeItem('car-safe')
        getState().history.push('/signin')
    }
}

export const loadLost = () => {
    return (dispatch, getState) => {
        axios({
            baseURL: BASE_URL_LOST,
            url: GET
        })
            .then(res => {
                dispatch({ type: REDUX_LOST, value: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const addLost = (report) => {
    return (dispatch, getState) => {
        dispatch({ type: REDUX_LOADING, value: true })
        axios({
            baseURL: BASE_URL_LOST,
            url: ADD,
            method: 'POST',
            data: report
        })
            .then(res => {
                dispatch({ type: REDUX_LOADING, value: false })
                getState().history.push('/lost')
            })
            .catch(err => {
                if (err.response) {
                    alert('report with same license plate exists')
                } else {
                    console.log(err)
                }
                dispatch({ type: REDUX_LOADING, value: false })
            })
    }
}

export const deleteLost = (id) => {
    return (dispatch, getState) => {
        axios({
            baseURL: BASE_URL_LOST,
            url: REMOVE + id,
            method: 'DELETE'
        })
            .then(res => {
                dispatch({ type: REDUX_LOST, value: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const loadFound = () => {
    return (dispatch, getState) => {
        axios({
            baseURL: BASE_URL_FOUND,
            url: GET
        })
            .then(res => {
                dispatch({ type: REDUX_FOUND, value: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const addFound = (report) => {
    return (dispatch, getState) => {
        dispatch({ type: REDUX_LOADING, value: true });
        axios({
            baseURL: BASE_URL_FOUND,
            url: ADD,
            method: 'POST',
            data: report
        })
            .then(res => {
                dispatch({ type: REDUX_LOADING, value: false })
                getState().history.push('/found')
            })
            .catch(err => {
                if (err.response) {
                    alert('report with same license plate exists')
                } else {
                    console.log(err)
                }
                dispatch({ type: REDUX_LOADING, value: false })
            })
    }
}

export const deleteFound = (id) => {
    return (dispatch, getState) => {
        axios({
            baseURL: BASE_URL_FOUND,
            url: REMOVE + id,
            method: 'DELETE'
        })
            .then(res => {
                dispatch({ type: REDUX_FOUND, value: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const loadColors = () => {
    return (dispatch, getState) => {
        axios({
            baseURL: BASE_URL_HELPERS,
            url: GET_COLORS
        })
            .then(res => {
                dispatch({ type: REDUX_COLORS, value: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const loadBrands = () => {
    return (dispatch, getState) => {
        axios({
            baseURL: BASE_URL_HELPERS,
            url: GET_BRANDS
        })
            .then(res => {
                dispatch({ type: REDUX_BRANDS, value: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const setHistory = (h) => {
    return (dispatch, getState) => {
        dispatch({ type: REDUX_ROUTER, value: h })
    }
}