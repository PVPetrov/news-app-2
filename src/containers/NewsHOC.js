import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetch_articles } from '../actions/actions';
import News from '../components/News';
import { getArticles } from '../reducers/news';
import { Spin } from 'antd';


class NewsHOC extends Component{
    
    componentDidMount(){
        this.props.fetch_articles();
    }
    
    render(){
        const {isFetching, ...props} = this.props;
        if(isFetching){
            return <div><Spin size="large"/></div>
        }
        return <News {...props} />
    }
}

const mapStateToProps = state => {
    return{
        articles: getArticles(state.news),
        isFetching: state.news.isFetching
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetch_articles: topic => dispatch(fetch_articles(topic))
    }
}

NewsHOC = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsHOC));

export default NewsHOC;
