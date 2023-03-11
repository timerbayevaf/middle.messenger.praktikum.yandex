import { HTTPTransport } from './http-transport';
import { getError, NoErrorThrownError } from './test/get-error';

describe('utils/HTTPTransport', () => {
  const http = new HTTPTransport();

  test('HTTPError 500', async () => {
    await expect(http.get('test-error-500')).rejects.toThrow(Error);
  });

  test('HTTPError 401', async () => {
    const error = await getError<{ message: string }>(async () =>
      http.get('test-error-401')
    );

    expect(error).not.toBeInstanceOf(NoErrorThrownError);
    expect(error.message).toEqual('Unauthorized user');
  });

  test('HTTPError 200', async () => {
    const res = await http.get('test-status-200');

    expect(res).toEqual({ test: 'test' });
  });
});
