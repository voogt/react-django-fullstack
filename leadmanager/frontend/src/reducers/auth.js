import { USER_LOADED, USER_LOADING, AUTH_ERROR } from "../actions/types"

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoggedIn: false,
    isLoading: false,
    user: ""
}

export default function(state = initialState, action){
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoggedIn: true,
                isLoading: false,
                user: action.payload
            }
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoggedIn: false,
                isLoading: false,
            }
        default:
            return state
    }
}