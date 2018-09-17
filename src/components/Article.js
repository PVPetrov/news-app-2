import React from 'react';
import { Card, Skeleton } from 'antd';
const { Meta } = Card;

const Article = ({article}) => (
    <article>
        <Card cover={<img src={article.urlToImage} alt={article.title} />} >
            <Meta title={article.title} />
            <p>{`by ${article.author}`}</p>
        </Card>
    </article>
)

export default Article;