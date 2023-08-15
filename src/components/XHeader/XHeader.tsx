import { FC } from 'react';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Header } from 'antd/es/layout/layout';

import { ReactComponent as Logo } from '../../../public/logo.svg';

type PropsType = {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  colorBgContainer: string;
};

export const XHeader: FC<PropsType> = ({ collapsed, setCollapsed, colorBgContainer }) => {
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <div style={{ display: 'flex' }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
        <Logo style={{ width: '200px' }} />
      </div>
    </Header>
  );
};
