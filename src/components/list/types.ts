type Item = Record<string, any>;

interface ListProps {
  className?: string;
  items: Item[];
  renderItem(item: Item): JSX.Element;
}

export { ListProps, Item };
