import { useCallback, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useSelectItems(data: any[]) {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const onSelectItem = useCallback(
    (id: number, adding: boolean) => {
      const mutableSelectedItems = [...selectedItems];

      if (adding) {
        mutableSelectedItems.push(id);
      } else {
        const indexToRemove = mutableSelectedItems.indexOf(id);
        if (indexToRemove >= 0) mutableSelectedItems.splice(indexToRemove, 1);
      }

      setSelectedItems(mutableSelectedItems);
    },
    [selectedItems]
  );

  const onSelectAllItems = useCallback(
    (adding: boolean) => {
      if (adding) {
        setSelectedItems(data.map(({ id }) => id));
      } else {
        setSelectedItems([]);
      }
    },
    [data]
  );

  return {
    selectedItems,
    onSelectItem,
    onSelectAllItems
  };
}
