import { AIcreateElement } from 'core';
import { Search } from './components/search';
import { Icon, Icons } from 'components/icon';

import './chat-container.css';
import { Button } from 'components/button';
import { ListItem } from './components/list-item';

interface ChatlistContainerProps {
  list: any[];
}

const ChatlistContainer = ({ list }: ChatlistContainerProps) => (
  <div className='chatlist'>
    <div className='chatlist__header'>
      <Search />
      <Button>
        <Icon size={20} type={Icons.Menu} />
      </Button>
    </div>
    <ul className='list'>
      {list.map((el, index) => (
        <ListItem
          isActive={index === 0}
          last_message={el.last_message}
          unread_count={el.unread_count}
          id={el.id}
          avatar={el.avatar}
          title={el.title}
        />
      ))}
    </ul>
  </div>
);

export default ChatlistContainer;
