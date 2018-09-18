import { combineReducers } from 'redux';
import { union } from 'lodash';

// store all the articles in an object by url
const articlesByUrl = (state = {}, action) => {
    switch(action.type){
        case 'RECEIVE_ARTICLES':
        const nextStateArticles = {...state};
            let articles = action.payload.entities.articles;
            for( let article in articles){
                nextStateArticles[article] =  articles[article]
            };
            return nextStateArticles;
        default:
            return state;
    }
}

// store an array of all the urls pointing to the article object keys
const articleUrlArray = (state = [], action) => {
    switch(action.type){
        case 'RECEIVE_ARTICLES':
            return union(state, action.payload.result);
        default:
            return state;
    }
}


// show the fetching state
const isFetching = (state = false, action) => {
    switch(action.type){
        case 'REQUEST_ARTICLES':
            return state = true;
        case 'RECEIVE_ARTICLES':
        case 'REQUEST_ARTICLES_FAIL':
            return state = false;
        default:
            return state;
    }
}


// store the error if any duringt he fetch
const error = (state = null, action) => {
    switch(action.type){
        case 'REQUEST_ARTICLES':
            return state = null;
        case 'REQUEST_ARTICLES_FAIL':
            return state = action.payload;
        default:
            return state;
    }
}

export default  combineReducers({articlesByUrl, articleUrlArray, isFetching, error });

export const getArticles = (news) => {return news.articleUrlArray.map( url => news.articlesByUrl[url]);}