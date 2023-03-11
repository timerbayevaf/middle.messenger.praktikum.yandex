import { Router } from './router';
import { Block } from '../block';
import sleep from 'utils/test/sleep';
import NotFoundPage from 'pages/not-found';
import MockPage1 from 'utils/test/mock-page-1';
import MockPage2 from 'utils/test/mock-page-2';

describe('core/router', () => {
  const router = new Router();

  router.setRootQuery('#test');

  router
    .use('/test', MockPage1 as typeof Block, { isPrivate: false })
    .use('/test-two', MockPage2 as typeof Block, { isPrivate: false })
    .use('/404', NotFoundPage as typeof Block, {
      isPrivate: false,
    })
    .start();

  test('rootQuery === #test', () => {
    expect(router.rootQuery).toBe('#test');
  });

  test('проверка наличия роута в роутере', () => {
    expect(router.allRoutes).toContainEqual({
      _pathname: '/test',
      _blockClass: MockPage1,
      _block: null,
      _props: { isPrivate: false, rootQuery: '#test' },
    });
  });

  test('переход на url test', () => {
    document.body.innerHTML = '<div id="test"></div>';

    router.go('/test');
    expect(router.currentRoute?.pathname).toBe('/test');
  });

  test('переход на не существующий урл', () => {
    document.body.innerHTML = '<div id="test"></div>';

    router.go('/test');
    router.go('/anypath');

    expect(window.location.pathname).toBe('/404');
  });

  test('переход назад', async () => {
    document.body.innerHTML = '<div id="test"></div>';

    router.go('/test');
    router.go('/test-two');
    router.back();

    await sleep();

    expect(window.location.pathname).toBe('/test');
  });

  test('проверка render на соответствие урл', async () => {
    router.go('/test');

    await sleep();

    expect(document.body.getElementsByClassName('main')).toContainEqual(
      router.currentRoute?.dom
    );
  });
});
