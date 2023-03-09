import { AIcreateElement, Router, withBlock } from 'core';
import { Button } from 'components/button';
import { ROUTES, ROUTE_TYPES } from 'constant';

import './not-found.css';
const router = new Router();

const NotFound = () => (
  <div className='not-found'>
    <h1>404</h1>
    <h2>Страница не найдена, либо еще не создана</h2>
    <Button
      view='secondary'
      label='Назад к чатам'
      handleClick={() => router.go(ROUTES[ROUTE_TYPES.CHAT_LIST])}
    />
  </div>
);

NotFound.displayName = 'NotFound';

export default withBlock(NotFound);
