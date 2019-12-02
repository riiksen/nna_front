import { PageHeader } from 'antd';
import React from 'react';

export class Chat extends React.Component {
  public render(): React.ReactNode {
    return (
      <div id="chat">
        <PageHeader
          title="Chat"
          subTitle="10"
          avatar={{ src: 'flagurl' }}
        >

        </PageHeader>
      </div>
    );
  }
}