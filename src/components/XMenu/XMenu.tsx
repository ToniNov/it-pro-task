import { FC } from 'react';

import { Menu } from 'antd';

export const XMenu: FC = () => {
  return (
    <Menu theme="dark" mode="inline" style={{ paddingTop: '35%' }}>
      <Menu.Item key="1">Заголовок</Menu.Item>
      <Menu.Item key="2">Дата публикации</Menu.Item>
      <Menu.Item key="3">Краткое описание</Menu.Item>
    </Menu>
  );
};
