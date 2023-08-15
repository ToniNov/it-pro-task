import { FC } from 'react';

import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

// type PropsType = {};

export const ArticlePage: FC = () => {
  return (
    <Card title="Article Title">
      <p>Article content goes here...</p>
      <Button type="link">
        <Link to="/">Вернуться на главную</Link>
      </Button>
    </Card>
  );
};
