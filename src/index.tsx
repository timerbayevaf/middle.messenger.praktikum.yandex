import { AIcreateElement } from './core/ai-factory';

import MainPage from 'pages/main';

const list: any[] = [];
let i = -1;

const Main = () => {
  return <MainPage label='test' />;
};

function render(element: any, parentDom: HTMLElement) {
  // Append to parent
  parentDom.appendChild(element);
}

const container = document.getElementById('root');

render(<Main />, container as HTMLElement);
