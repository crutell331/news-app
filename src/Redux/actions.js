import types from './actionTypes';

export function fetchTrending() {
    return async function (dispatch) {
        const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
        const data = await response.json();
        dispatch({ type: types.fetchTrending, payload: data.results });
    };
};
export function fetchSearch(searchTerm) {
    return async function (dispatch) {
        const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${process.env.REACT_APP_NYT_KEY}`)
        const data = await response.json();
        dispatch({ type: types.fetchSearch, payload: data.response.docs });
    };
};
export function saveArticle(payload) {
    console.log("in here", payload)
    return { type: types.saveArticle, payload };
};