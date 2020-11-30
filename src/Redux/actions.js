import types from './actionTypes';

export function fetchTrending() {
    return async function (dispatch) {
        const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
        const data = await response.json();
        dispatch({ type: types.fetchTrending, payload: data.results });
    };
};