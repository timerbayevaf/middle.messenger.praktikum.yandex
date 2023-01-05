import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';

import './widget.css';

interface WidgetProps {
  children?: string;
  className?: string;
}

const Widget = ({ children, className }: WidgetProps) => (
  <div className={cn('widget', className)}>{children}</div>
);

export default Widget;
