import { isEmpty } from './utils/isEmpty';

const root = document.querySelector('#root');

root.append((document.createElement('span').textContent = isEmpty('123')));
