import { Button } from 'components/button';
import { ROUTES, ROUTE_TYPES } from 'constants';
import { AIcreateElement, router, withBlock } from 'core';

import './not-found.css';

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
