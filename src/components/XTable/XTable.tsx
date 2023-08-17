import { FC, useState } from 'react';

import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { createArrayOfObjects } from '../../helpers/createArrayOfObjects';
import { ArticleType } from '../../types/types';
import { XSelect } from '../XSelect/XSelect';

import { ColumnFactory } from './columnFactory';

type PropsType = {
  articles: ArticleType[];
};

export const XTable: FC<PropsType> = ({ articles }) => {
  const [defaultColumns, setDefaultColumns] = useState<string[]>([
    'title',
    'publishedAt',
    'description',
  ]);
  const columns =
    articles && articles[0] ? createArrayOfObjects(articles[0], defaultColumns) : [];
  const options = articles && articles[0] ? Object.keys(articles[0]) : [];
  const handelSelectColumn = (newColumnData: string[]): void => {
    setDefaultColumns(newColumnData);
  };

  // @ts-ignore
  const renderedColumns: ColumnsType<ArticleType & { key: number }> | undefined =
    ColumnFactory(columns);

  const dataSource: (ArticleType & { key: number })[] = articles.map((el, index) => {
    return {
      ...el,
      key: index + 1,
    };
  });

  return (
    <div>
      <XSelect
        options={options}
        defaultOptions={defaultColumns}
        handelSelectColumn={handelSelectColumn}
      />
      <Table
        size="middle"
        columns={renderedColumns}
        dataSource={dataSource}
        pagination={{
          defaultPageSize: 5,
        }}
      />
    </div>
  );
};
