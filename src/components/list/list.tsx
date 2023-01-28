import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';
import { ListProps, Item } from './types';

import './list.css';

const List = ({ className, items, renderItem }: ListProps) => (
  <ul className={cn('list', className)}>
    {items.map((el: Item) => renderItem(el))}
  </ul>
);

export default List;
