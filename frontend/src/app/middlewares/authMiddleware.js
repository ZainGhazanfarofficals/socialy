import axios from "axios";

// Local imports
import { LOGOUT,LOGIN_SUCCESS } from '../actions/authActions';

export const authMiddleware = store => next => action => {
    console.log("Auth Middleware");
    switch (action.type) {
        case LOGIN_SUCCESS:
            // set token in headers for subsequent requests
            axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
            break;
        case LOGOUT:
            // remove token from headers
            delete axios.defaults.headers.common['Authorization'];
            break;
        default:
            break;
    }

    // pass the action along to the next middleware
    next(action);
};