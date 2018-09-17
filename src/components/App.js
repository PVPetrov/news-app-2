import React, { Component } from 'react';
import { Layout, Menu, Button } from 'antd';
import NewsHOC from '../containers/NewsHOC';
import '../App.css';

const { Header, Footer, Sider, Content } = Layout;



class App extends Component {
    render() {
        return (
          <div className="App">
              <Layout>
                  <Header>Quick News</Header>
                  <Layout>
                      <Sider>Sider</Sider>
                      <Layout>
                          <Content style={{width: '100%', minHeight: '1000px'}}>
                              <NewsHOC />
                          </Content>
                          <Footer>Footer</Footer>
                      </Layout>
                  </Layout>
              </Layout>
          </div>
    );
  }
}

export default App;
