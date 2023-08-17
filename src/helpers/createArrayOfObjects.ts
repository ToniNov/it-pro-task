import { ArticleType } from '../types/types';

import { splitWordsByCapital } from './splitWordsByCapital';

export type DefaultColumnType = {
  title: string;
  dataIndex: string;
  key: string;
};

export const createArrayOfObjects = (
  obj: ArticleType,
  defaultColumns: string[] = [],
): { title: string; dataIndex: string; key: string }[] => {
  const keys = Object.keys(obj);

  return keys.reduce((acc, key) => {
    if (defaultColumns.includes(key)) {
      acc.push({
        title: splitWordsByCapital(key),
        dataIndex: key,
        key,
      });
    }

    return acc;
  }, [] as DefaultColumnType[]);
};
