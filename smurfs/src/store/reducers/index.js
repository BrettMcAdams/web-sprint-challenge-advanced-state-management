import {
    FETCH_SMURFS,
    FETCH_SMURFS_ERROR,
    FETCH_SMURFS_SUCCESS,
    POST_SMURF,
    POST_SMURF_SUCCESS,
    POST_SMURF_ERROR
} from "../actions";

const initialState = {
    smurfs: [],
    loadingSmurfs: true,
    errorMessage: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS:
            return {
                ...state,
                loadingSmurfs: true
            };
        case FETCH_SMURFS_ERROR:
            return {
                ...state,
                loadingSmurfs: false,
                errorMessage: action.payload.message
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                loadingSmurfs: false
            };
        case POST_SMURF:
            return {
                ...state,
                loadingSmurfs: true
            };
        case POST_SMURF_ERROR:
            return {
                ...state,
                loadingSmurfs: false,
                errorMessage: action.payload.message
            };
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                loadingSmurfs: false
            };
        default:
            return state;
    }
};