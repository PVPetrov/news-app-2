import React from 'react';
import { Link } from 'react-router-dom';
import Article from './Article';

const Articles = ({articles, openPopup}) => (
    <div style={{maxWidth: '800px', minWidth: '300px', margin: '0 auto'}}>
        {
            articles.map( (article,i) => {
                return (
                    <Link key={article.url} to={`/news/${i}`} >
                        <Article  article={article} openPopup={openPopup} />
                    </Link>)
            })
        }
    </div>
);
export default Articles;
