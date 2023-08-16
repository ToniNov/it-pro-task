import { FC } from 'react';

import { Space, Spin } from 'antd';

export const Loader: FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <Space direction="vertical" align="center">
      <Spin size="large" />
    </Space>
  </div>
);
