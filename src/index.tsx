import { AIcreateElement } from './core/ai-factory';

import MainPage from 'pages/main';
import Login from 'pages/login';
import Signup from 'pages/signup';

const Main = () => {
  return <MainPage />;
};

function render(element: any, parentDom: HTMLElement) {
  // Append to parent
  parentDom.appendChild(element);
}

const container = document.getElementById('root');

render(<Signup />, container as HTMLElement);
