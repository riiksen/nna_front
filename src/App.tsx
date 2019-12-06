import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './core/utils/createStore';
import { Chat } from './components/Chat/Chat'
import { Sidebar } from './components/Sidebar/Sidebar';
import { Routes } from './routes';

const { Content } = Layout;

// eslint-disable-next-line arrow-body-style
const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Layout>
          <Layout>
            <Sidebar />
            <Content id="content">
              <Routes />
            </Content>
            <Chat />
          </Layout>
        </Layout>
      </BrowserRouter>
    </ReduxProvider>
  );
};

export { App };
