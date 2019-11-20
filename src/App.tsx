import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';
import { Sidebar } from './components/Sidebar/Sidebar';

const { Content } = Layout;

// eslint-disable-next-line arrow-body-style
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Layout>
          <Sidebar />
          <Content id="content">
            <Routes />
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export { App };
