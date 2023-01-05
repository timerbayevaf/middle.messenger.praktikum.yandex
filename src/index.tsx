import { AIcreateElement, AIcreateFragment } from './core/ai-factory';

import MainPage from 'pages/main';
import Login from 'pages/login';
import Signup from 'pages/signup';
import NotFoundPage from 'pages/not-found';
import BrokendPage from 'pages/broken/broken';
import { CHATLIST_VIEW } from 'constants';

function getView(obj: Record<string, string>) {
  if (
    obj &&
    obj.view !== undefined &&
    obj.view !== null &&
    typeof obj.view === 'string'
  ) {
    return obj.view;
  }

  return '';
}

const Main = () => {
  const urlSearchParams = new URLSearchParams(
    window.location.search.replace(/\&amp;/g, '&')
  );
  const params = Object.fromEntries(urlSearchParams.entries());

  const view = getView(params);

  switch (view) {
    case 'chats':
      return (
        <MainPage
          isSelectedChat={params.isSelectedChat === 'true'}
          searchValue={params.search}
          viewType={params.profileViewType as CHATLIST_VIEW}
        />
      );
    case 'signup':
      return <Signup />;
    case 'login':
      return <Login />;
    case 'brokend':
      return <BrokendPage />;
    case 'not-found':
      return <NotFoundPage />;

    default:
      return (
        <nav>
          <ul className='example'>
            <li>
              <a
                href='?view=chats&profileViewType=list&isSelectedChat=true'
                target='_blank'
              >
                Chats
              </a>
            </li>

            <li>
              <a
                href='?view=chats&profileViewType=search&search=pupkin'
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
                href='?view=chats&profileViewType=view_profile&isSelectedChat=true'
                target='_blank'
              >
                Profile Chats
              </a>
            </li>

            <li>
              <a
                href='?view=chats&profileViewType=edit_profile&isSelectedChat=true'
                target='_blank'
              >
                Edit Profile Chats
              </a>
            </li>

            <li>
              <a
                href='?view=chats&profileViewType=edit_profile'
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
  }
};

function render(element: any, parentDom: HTMLElement) {
  // Append to parent
  parentDom.appendChild(element);
}

const container = document.getElementById('root');

render(<Main />, container as HTMLElement);
