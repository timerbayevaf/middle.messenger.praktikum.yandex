import { AIcreateElement, AIcreateFragment } from './core/ai-factory';

import MainPage from 'pages/main';
import Login from 'pages/login';
import Signup from 'pages/signup';
import NotFoundPage from 'pages/not-found';
import BrokendPage from 'pages/broken/broken';

const Main = () => {
  return <MainPage />;
};

function render(element: any, parentDom: HTMLElement) {
  // Append to parent
  parentDom.appendChild(element);
}

const container = document.getElementById('root');

render(<Main />, container as HTMLElement);
