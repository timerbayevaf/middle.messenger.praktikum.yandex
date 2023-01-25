import { AIcreateElement, withBlock } from 'core';
import { CHATLIST_VIEW } from 'constants';

const Menu = () => (
  <nav>
    <ul className='example'>
      <li>
        <a
          href={`?view=chats&profileViewType=${CHATLIST_VIEW.CHAT_LIST}&isSelectedChat=true`}
          target='_blank'
        >
          Chats
        </a>
      </li>

      <li>
        <a
          href={`?view=chats&profileViewType=${CHATLIST_VIEW.SEARCH}&search=pupkin`}
          target='_blank'
        >
          Not selected Chat
        </a>
      </li>

      <li>
        <a
          href='?view=chats&profileViewType=search&search=pupkin'
          target='_blank'
        >
          Search Chats
        </a>
      </li>

      <li>
        <a
          href={`?view=chats&profileViewType=${CHATLIST_VIEW.VIEW_PROFILE}&isSelectedChat=true`}
          target='_blank'
        >
          Profile Chats
        </a>
      </li>

      <li>
        <a
          href={`?view=chats&profileViewType=${CHATLIST_VIEW.EDIT_PROFILE}&isSelectedChat=true`}
          target='_blank'
        >
          Edit Profile Chats
        </a>
      </li>

      <li>
        <a
          href={`?view=chats&profileViewType=${CHATLIST_VIEW.EDIT_PASSWORD}`}
          target='_blank'
        >
          Edit Password Chats
        </a>
      </li>

      <li>
        <a href='?view=login' target='_blank'>
          Login
        </a>
      </li>
      <li>
        <a href='?view=signup' target='_blank'>
          Sugnup
        </a>
      </li>
      <li>
        <a href='?view=brokend' target='_blank'>
          BrokendPage
        </a>
      </li>
      <li>
        <a href='?view=not-found' target='_blank'>
          NotFoundPage
        </a>
      </li>
    </ul>
  </nav>
);

export default withBlock(Menu);
