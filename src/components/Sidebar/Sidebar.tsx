import { Layout, Menu, Icon } from 'antd';
import React from 'react';

import { Link } from 'react-router-dom';
import './sidebar.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

export class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: boolean): void => {
    this.setState({ collapsed });
  };

  render() {
   return (
     <Sider
       collapsible
       collapsed={this.state.collapsed}
       onCollapse={this.onCollapse}
       id='sidebar'
       breakpoint='xs'
       collapsedWidth='0'
     >
       <Link to='/'>
         <div className='logo' />
       </Link>
       <Menu>
             <Menu.Item>
               <Link to='/jackpot'>
                 <Icon type='home' />
                 <span>Home</span>
               </Link>
             </Menu.Item>
       </Menu>
     </Sider>
   );
  };
}