import { AIcreateElement } from 'core';
import { Search } from 'layout/chats/chatlist/components/search';
import { Icon, Icons } from 'components/icon';

import './chat-container.css';
import { Button } from 'components/button';
import ChatList from './components/chat-list';
import SearchResult from './components/search-result';

interface ChatlistContainerProps {
  list: any[];
  isSearch: boolean;
}

const ChatlistContainer = ({ list, isSearch }: ChatlistContainerProps) => (
  <div className='chatlist'>
    <div className='chatlist__header'>
      <Search />
      <Button size='small'>
        <Icon size={20} type={Icons.Menu} />
      </Button>
    </div>
    {isSearch ? (
      <SearchResult userList={list} />
    ) : (
      <ChatList activeId={123} list={list} />
    )}
  </div>
);

export default ChatlistContainer;
