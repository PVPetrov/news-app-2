import { connect } from 'react-redux';
import { fetch_articles } from '../actions/actions';
import News from '../components/News';

const mapStateToProps = state => {
    return{
        news: state.news
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetch_articles: topic => dispatch(fetch_articles(topic))
    }
}

const NewsHOC = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsHOC;
