import React from 'react';
import { Button } from 'antd';
import Article from './Article';

const News = ({articles}) => {
    let articlesList = articles.map( article => {return <Article key={article.url} article={article} />});
    return(
        <div style={{maxWidth: '800px', minWidth: '300px', margin: '0 auto'}}>
        {articlesList}
        </div>
    );
}
export default News;
