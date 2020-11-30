import { combineReducers } from 'redux';

const defaultState = {
    trendingArticles: [],
    searchedArticles: [],
    favoriteArticles: []
};

function trendingArticlesReducer(state = defaultState.trendingArticles, action) {
    switch (action.type) {
        case "FETCH_TRENDING":
            return action.payload;
            break;

        default:
            return state;
            break;
    }
};
function searchedArticlesReducer(state = defaultState.searchedArticles, action) {
    switch (action.payload) {
        case "FETCH_SEARCHED":
            console.log("in reducer");
            break;

        default:
            return state;
            break;
    }
};
function favoriteArticlesReducer(state = defaultState.favoriteArticles, action) {
    switch (action.payload) {
        case "ADD_FAVORITE":
            console.log("in reducer");
            break;

        default:
            return state;
            break;
    }
};

const rootReducer = combineReducers({
    trendingArticles: trendingArticlesReducer,
    searchedArticles: searchedArticlesReducer,
    favoriteArticles: favoriteArticlesReducer
});

export default rootReducer;