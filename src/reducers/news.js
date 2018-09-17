import { combineReducers } from 'redux';
import _ from 'lodash';

const articlesByUrl = (state = {}, action) => {
    switch(action.type){
        case 'RECEIVE_ARTICLES':
        console.log(action.payload);
        const nextStateArticles = {...state};
            let articles = action.payload.entities.articles;
            for( let article in articles){
                console.log(article);
                nextStateArticles[article] =  articles[article]
            };
            return nextStateArticles;
        default:
            return state;
    }
}

const articleUrlArray = (state = [], action) => {
    switch(action.type){
        case 'RECEIVE_ARTICLES':
            return _.union(state, action.payload.result);
        default:
            return state;
    }
}

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

export default  combineReducers({articlesByUrl, articleUrlArray, isFetching });
