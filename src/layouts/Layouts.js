
import React, { Component } from 'react';
import { Layout, Breadcrumb, Icon } from 'antd';
import style from './Layout.module.css';
// import Header from './Header';
import Nav from './Nav';
import Content1 from './Content';
// import Footer from './Footer';

const {
  Header,
  Content,
  Footer,
  Sider,
} = Layout;

class Layouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState(({ collapsed }) => ({
      collapsed: !collapsed,
    }));
  }

  render() {
    // const { history, match, location } = this.props
    return (
      <React.Fragment>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className={style.logo} />
            <Nav />
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className={style.trigger}
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            Bill is a cat.

              </div> */}
              <Content1 />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
          {' '}
        </Layout>
        {' '}
      </React.Fragment>
    );
  }
}

export default Layouts;
