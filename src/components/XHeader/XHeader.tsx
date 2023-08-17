import { FC } from 'react';

import { Header } from 'antd/es/layout/layout';

import { ReactComponent as Logo } from '../../../public/logo.svg';

type PropsType = {
  colorBgContainer: string;
};

export const XHeader: FC<PropsType> = ({ colorBgContainer }) => {
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <div>
        <Logo style={{ width: '200px', paddingTop: '10px', paddingLeft: '10px' }} />
      </div>
    </Header>
  );
};
