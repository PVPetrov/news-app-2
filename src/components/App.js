import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import NewsHOC from '../containers/NewsHOC';
import '../App.css';

const { Header, Footer, Content } = Layout;


class App extends Component {
    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
                    <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1"><Link to="/news">Quick News</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ marginTop: 64 }}>
                    <Switch>
                        <Route exact path="/news" component={NewsHOC} />
                        <Route  path="/news/:index" component={NewsHOC} />
                    </Switch>
                </Content>
                <Footer>News App</Footer>
            </Layout>
        );
    }
}


export default App;
