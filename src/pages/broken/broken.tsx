import { Button } from 'components/button';
import { AIcreateElement } from 'core';
import './broken.css';

const BrokendPage = () => (
  <div className='broken'>
    <h1>500</h1>
    <p>
      Мы уже устраняем неисправность, попробуйте обновить страницу через
      некоторое время, Приносим извинения за временные неудобства.
    </p>
    <div className='broken__group'>
      <Button view='secondary' label='Обновить' />
      <Button view='secondary' label='Назад к чатам' />
    </div>
  </div>
);

export default BrokendPage;
