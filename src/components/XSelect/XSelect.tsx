import { FC, useState } from 'react';

import { Select } from 'antd';

type PropsType = {
  options: string[];
  defaultOptions: string[];
  handelSelectColumn: (newColumnData: string[]) => void;
};

export const XSelect: FC<PropsType> = ({
  options,
  defaultOptions,
  handelSelectColumn,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>(defaultOptions);

  const filteredOptions = options.filter((o) => !selectedItems.includes(o));

  const handelChangeSelect = (newColumnData: string[]): void => {
    setSelectedItems(newColumnData);
    handelSelectColumn(newColumnData);
  };

  return (
    <Select
      mode="multiple"
      placeholder="Inserted are removed"
      value={selectedItems}
      onChange={handelChangeSelect}
      style={{ width: '55%', paddingBottom: '5px' }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
};
