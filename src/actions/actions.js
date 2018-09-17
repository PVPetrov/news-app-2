import axios from 'axios';
import { normalize, schema } from 'normalizr';

const article = new schema.Entity('articles', {}, {idAttribute: 'url'});


const request_articles = () => ({
    type: 'REQUEST_ARTICLES'
});

const receive_articles = payload => ({
    type: 'RECEIVE_ARTICLES',
    payload
});

const request_articles_fail = error => ({
    type: 'REQUEST_ARTICLES_FAIL',
    error
});

export const fetch_articles = (topic) => {
    return dispatch => {
        dispatch(request_articles());
        axios.get(`https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=6f7080de764847a49dba2021c943d24f&langauge=english&q=${topic}`)
        .then( response => {
            let payload = normalize(response.data.articles, [article]);
            console.log(payload);
            dispatch(receive_articles(payload));
        })
        .catch(err => console.log(err))
    }
}
