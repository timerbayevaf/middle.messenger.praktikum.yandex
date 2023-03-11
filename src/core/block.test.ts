import { Block } from './block';
import MockBlock from 'utils/test/mock-block';

describe('core/block', () => {
  let mockPage: Block<{}, {}>;

  beforeEach(() => {
    mockPage = new MockBlock({});
  });

  test('chek render result', () => {
    const received = document.createElement('h1');
    received.textContent = 'Block';

    expect(mockPage.getContent()?.dom).toStrictEqual(received);
  });

  test('chek empty render props', () => {
    expect(mockPage.props).toEqual({});
  });

  test('chek render props', () => {
    mockPage.setProps({ name: 'Test' });

    expect(mockPage.props).toEqual({ name: 'Test' });
  });
});
