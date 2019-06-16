import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {
  Link, withRouter,
} from 'react-router-dom';
import menusData from './Menus';

const { SubMenu } = Menu;

@withRouter
class Sider extends Component {
  genMenus(data) {
    const { match } = this.props;
    if (!data || !data.length) {
      return false;
    }

    return (
      data.map(item => {
        if (item.children && item.children.length) {
          const items = item.children;
          return (
            <SubMenu
              key={item.key}
              title={(
                <span>
                  {
                  item.icon && <Icon type={item.icon} />
                }
                  <span>{item.title}</span>
                </span>
            )}
            >
              {
                this.genMenus(items)
              }
            </SubMenu>
          );
        }
        return (
          <Menu.Item key={item.key}>
            <Link to={`${match.path}/${item.path}`}>
              <span>
                {item.icon && <Icon type={item.icon} />}
                <span>{item.title}</span>
              </span>
            </Link>
          </Menu.Item>
        );
      })
    );
  }

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          {
            this.genMenus(menusData)
        }
        </Menu>
      </div>
    );
  }
}

export default Sider;
