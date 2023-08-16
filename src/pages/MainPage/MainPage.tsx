import { FC, useEffect, useState } from 'react';

import { Layout, theme } from 'antd';

import useArticleStore from '../../app/useArticleStore';
import XErrorNotification from '../../components/XErrorNotification/XErrorNotification';
import { XHeader } from '../../components/XHeader/XHeader';
import { Loader } from '../../components/XLoader/Loader';
import { XMenu } from '../../components/XMenu/XMenu';

import styles from './MainPage.module.css';

const { Sider, Content } = Layout;

export const MainPage: FC = () => {
  const { loading, error, fetchArticles } = useArticleStore();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  if (loading) {
    return <Loader />;
  }

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
        <Content className={styles.content} style={{ background: colorBgContainer }} />
        {error?.message && <XErrorNotification error={error} />}
      </Layout>
    </Layout>
  );
};
