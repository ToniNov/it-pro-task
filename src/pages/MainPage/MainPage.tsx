import { FC, useEffect } from 'react';

import { Layout, theme } from 'antd';

import useArticleStore from '../../app/useArticleStore';
import XErrorNotification from '../../components/XErrorNotification/XErrorNotification';
import { XHeader } from '../../components/XHeader/XHeader';
import { Loader } from '../../components/XLoader/Loader';
import { XTable } from '../../components/XTable/XTable';

import styles from './MainPage.module.css';

const { Content } = Layout;

export const MainPage: FC = () => {
  const { articles, loading, error, fetchArticles } = useArticleStore();
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
      <Layout>
        <XHeader colorBgContainer={colorBgContainer} />
        <Content className={styles.content} style={{ background: colorBgContainer }}>
          <XTable articles={articles} />
        </Content>
        {error?.message && <XErrorNotification error={error} />}
      </Layout>
    </Layout>
  );
};
