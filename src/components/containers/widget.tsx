import { AIcreateElement } from 'core';
import { cn } from 'utils/cn';
import { WidgetProps } from './types';

import './widget.css';

const Widget = ({ children, className = '' }: WidgetProps) => (
  <div className={cn('widget', className)}>{children}</div>
);

export default Widget;
