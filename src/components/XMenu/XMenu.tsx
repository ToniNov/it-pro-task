import { FC } from 'react';

import { Menu } from 'antd';

export const XMenu: FC = () => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={[
        {
          key: '1',
          label: 'Заголовок',
        },
        {
          key: '2',
          label: 'Дата публикации',
        },
        {
          key: '3',
          label: 'Краткое описание ',
        },
      ]}
    />
  );
};
