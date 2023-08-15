import { FC } from 'react';

import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

export const NotFoundPage: FC = () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Упс! Что-то пошло не так."
      extra={
        <Button type="primary">
          <Link to="/">На главную страницу</Link>
        </Button>
      }
    />
  );
};
