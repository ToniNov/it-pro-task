import { useMemo } from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Image, Input } from 'antd';
import { FilterDropdownProps } from 'antd/es/table/interface';
import { Link } from 'react-router-dom';

import { DefaultColumnType } from '../../helpers/createArrayOfObjects';
import { trimText } from '../../helpers/trimText';
import { ArticleType } from '../../types/types';
// TODO return type
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ColumnFactory = (obj: DefaultColumnType[]) => {
  const newObj = useMemo(() => {
    return obj.map((item) => {
      switch (item.key) {
        case 'title':
          return {
            ...item,
            filterDropdown: ({
              setSelectedKeys,
              selectedKeys,
              confirm,
            }: FilterDropdownProps) => {
              return (
                <Input
                  autoFocus
                  placeholder="Type text here"
                  value={selectedKeys[0]}
                  onChange={(e) => {
                    setSelectedKeys(e.target.value ? [e.target.value] : []);
                    confirm({ closeDropdown: false });
                  }}
                  onPressEnter={() => {
                    confirm();
                  }}
                  onBlur={() => {
                    confirm();
                  }}
                />
              );
            },
            filterIcon: () => <SearchOutlined />,
            onFilter: (value: string, record: ArticleType) => {
              return record.title.toLowerCase().includes(value.toLowerCase());
            },
          };
        case 'description':
          return {
            ...item,
            render: (description: string, index: any) => (
              <div>
                {trimText(description)}
                {'  '}
                <Link to={`/article/${index.key}`}>Read more</Link>
              </div>
            ),
          };
        case 'publishedAt':
          return {
            ...item,
            sorter: (a: any, b: any) => {
              return (
                new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
              );
            },
          };
        case 'url':
          return {
            ...item,
            render: (url: string) => <Link to={url}>View on the website</Link>,
          };
        case 'urlToImage':
          return {
            ...item,
            render: (urlToImage: string) => (
              <div>
                {urlToImage ? (
                  <Image width="90px" src={urlToImage} alt="Article" />
                ) : (
                  <span>No image available</span>
                )}
              </div>
            ),
          };
        case 'author':
          return {
            ...item,
            render: (author: string) => (
              <div>
                {author ? <h4>{trimText(author, 25)}</h4> : <h4>Author unknown</h4>}
              </div>
            ),
          };
        case 'source':
          return {
            ...item,
            render: (source: { name: string; id: string }) => (
              <div>{source.name ? <h4>{source.name}</h4> : <h4>Sours unknown</h4>}</div>
            ),
          };
        case 'content':
          return {
            ...item,
            render: (content: string) => (
              <div>
                {content ? <p>{trimText(content, 25)}</p> : <h4>Content empty</h4>}
              </div>
            ),
          };
        default:
          return item;
      }
    });
  }, [obj]);

  return newObj;
};
