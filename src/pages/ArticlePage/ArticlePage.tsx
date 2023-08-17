import { FC } from 'react';

import { Card, Image, Layout } from 'antd';
import { Link, useParams } from 'react-router-dom';

import useArticleStore from '../../app/useArticleStore';
import { formatDate } from '../../helpers/formatDate';

import styles from './ArticlePage.module.css';

export const ArticlePage: FC = () => {
  const { articles } = useArticleStore();
  const { articleId } = useParams();

  const article = articleId && articles[Number(articleId)];

  if (!article) {
    return <div>Статья не найдена</div>;
  }

  return (
    <Layout>
      <Link className={styles.link} to="/">
        Back to Home
      </Link>

      <Card className={styles.contentWrapper} title={article.title}>
        <div className={styles.container}>
          {article.urlToImage ? (
            <Image width={550} src={article.urlToImage} alt="urlToImage" />
          ) : null}

          <h2 className={styles.textDescription}>{article.description}</h2>
        </div>

        <h4>{article.content}</h4>
        <div>
          <p>{article.author}</p>
          <p>{formatDate(article.publishedAt)}</p>
        </div>
        <div>
          <h4>{article.source.name}</h4>

          <Link to={article.url}>Read full article on the website</Link>
        </div>
      </Card>
    </Layout>
  );
};
