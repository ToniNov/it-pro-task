import { FC, useEffect } from 'react';

import { message } from 'antd';

import { ErrorResponseDataType } from '../../types/types';

type PropsType = {
  error: ErrorResponseDataType;
};

export const XErrorNotification: FC<PropsType> = ({ error }) => {
  useEffect(() => {
    const displayErrorMessage = (): void => {
      const errorMessage = message.error({
        content: error.message,
        key: 1,
      });

      setTimeout(() => {
        message.destroy(errorMessage.name);
      }, 5000);
    };

    displayErrorMessage();
  }, [error]);

  return null;
};

export default XErrorNotification;
