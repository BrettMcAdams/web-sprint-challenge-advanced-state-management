import axios from 'axios'

// Action Types

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';
export const POST_SMURF = 'POST_SMURF';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_ERROR = 'POST_SMURF_ERROR';

// Action Creators

export const fetchSmurfs = ()  => {
    return (dispatch) => {
        dispatch({ type: FETCH_SMURFS });
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                // console.log(res);
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_SMURFS_ERROR, payload: "Whoops! Can't get your smurfs for you!"})
            })
    }
}

export const postSmurfs = newSmurf => {
    console.log(newSmurf);
    return (dispatch) => {
        dispatch({ type: POST_SMURF })
        axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(res => {
                console.log(res);
                dispatch({ type: POST_SMURF_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: POST_SMURF_ERROR, payload: 'Sorry!, there was an error submitting your smurf' })
            })
    }
}