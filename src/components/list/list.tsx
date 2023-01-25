import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';

import './list.css';

type Item = Record<string, any>;

interface ListProps {
  className?: string;
  items: Item[];
  renderItem(item: Item): JSX.Element;
}

const List = ({ className, items, renderItem }: ListProps) => (
  <ul className={cn('list', className)}>
    {items.map((el: Item) => renderItem(el))}
  </ul>
);

export default List;
