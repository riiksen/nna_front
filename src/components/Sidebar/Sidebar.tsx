import { Layout, Menu, Icon } from 'antd';
import React from 'react';

import { Link } from 'react-router-dom';
import './sidebar.less';
import { User } from './User';

const { Sider } = Layout;

export class Sidebar extends React.Component {
  public state = {
    collapsed: false,
    collapsedWidth: 0,
  };

  public onCollapse = (collapsed: boolean): void => {
    this.setState({ collapsed });
  };

  public onBreakpoint = (broken: boolean): void => {
    if(broken) {
      this.setState({ collapsedWidth: 0 });
    } else {
      this.setState({ collapsedWidth: 80 })
    }
  };

  public render(): React.ReactNode {
   return (
     <Sider
       collapsible
       collapsed={this.state.collapsed}
       onCollapse={this.onCollapse}
       onBreakpoint={this.onBreakpoint}
       collapsedWidth={this.state.collapsedWidth}
       id="sidebar"
       breakpoint="xs"
     >
       <Link to="/">
         <div className="logo" />
       </Link>
       <Menu>
             <Menu.Item>
               <Link to="/jackpot">
                 <Icon type="home" />
                 <span>Home</span>
               </Link>
             </Menu.Item>
             <User />
       </Menu>
     </Sider>
   );
  };
}