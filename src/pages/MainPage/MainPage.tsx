import { FC, useState } from 'react';

import { Layout, theme } from 'antd';

import { XHeader } from '../../components/XHeader/XHeader';
import { XMenu } from '../../components/XMenu/XMenu';

import styles from './MainPage.module.css';

const { Sider, Content } = Layout;

export const MainPage: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className={styles.mainPageLayout}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <XMenu />
      </Sider>
      <Layout>
        <XHeader
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          colorBgContainer={colorBgContainer}
        />
        <Content className={styles.content} style={{ background: colorBgContainer }}>
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
