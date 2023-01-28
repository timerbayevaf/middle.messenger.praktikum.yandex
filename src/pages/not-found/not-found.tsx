import { Button } from 'components/button';
import { AIcreateElement, withBlock } from 'core';

import './not-found.css';

const NotFound = () => (
  <div className='not-found'>
    <h1>404</h1>
    <h2>Страница не найдена, либо еще не создана</h2>
    <Button view='secondary' label='Назад к чатам' />
  </div>
);

NotFound.displayName = 'NotFound';

export default withBlock(NotFound);
