import {
    REDUX_LOST,
    REDUX_FOUND,
    REDUX_BRANDS,
    REDUX_COLORS,
    REDUX_LOADING,
    REDUX_SIGNIN,
    REDUX_SIGNUP,
    REDUX_SIGNOUT
} from '../constants/CONSTANTS'

const initState = {
    lost: [],
    found: [],
    colors: [],
    brands: [],
    user: {},
    loading: false
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {

        case REDUX_LOST:
            return {
                ...state,
                lost: [...action.value]
            }

        case REDUX_FOUND:
            return {
                ...state,
                found: [...action.value]
            }

        case REDUX_BRANDS:
            return {
                ...state,
                brands: [...action.value]
            }
        case REDUX_COLORS:
            return {
                ...state,
                colors: [...action.value]
            }

        case REDUX_LOADING:
            return {
                ...state,
                loading: action.value
            }

        case REDUX_SIGNIN || REDUX_SIGNUP || REDUX_SIGNOUT:
            return {
                ...state,
                user: { ...action.value }
            }

        default:
            return state;
    }
}

export default rootReducer