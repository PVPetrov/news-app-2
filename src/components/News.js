import React from 'react';
import { Button } from 'antd';

const News = ({fetch_articles}) => (
    <div>
        <Button onClick={() => fetch_articles('bitcoin')}>Press Me</Button>
    </div>
);

export default News;
