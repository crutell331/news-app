import { combineReducers } from 'redux';

const defaultState = {
    trendingArticles: [],
    searchedArticles: [],
    savedArticles: []
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
    switch (action.type) {
        case "FETCH_SEARCHED":
            console.log("in reducer", action.payload);
            return action.payload;
            break;

        default:
            return state;
            break;
    }
};
function savedArticlesReducer(state = defaultState.savedArticles, action) {
    switch (action.type) {
        case "SAVE_ARTICLE":
            console.log("in reducer", action.payload);
            return [...state, action.payload]
            break;

        default:
            return state;
            break;
    }
};

const rootReducer = combineReducers({
    trendingArticles: trendingArticlesReducer,
    searchedArticles: searchedArticlesReducer,
    savedArticles: savedArticlesReducer
});

export default rootReducer;