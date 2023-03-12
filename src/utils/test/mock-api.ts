import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { URI } from 'constant';
import { USER_MOCK } from './user-mock';

const handlers = [
  rest.post(`${URI.BASE}auth/logout`, (_req, res, ctx) => {
    return res(ctx.text('OK'));
  }),
  rest.post(`${URI.BASE}auth/signin`, (_req, res, ctx) => {
    return res(ctx.text('OK'));
  }),
  rest.get(`${URI.BASE}auth/user`, (_req, res, ctx) => {
    return res(ctx.json({ ...USER_MOCK, avatar: '' }));
  }),
  rest.get(`${URI.BASE}chats`, (_req, res, ctx) => {
    return res(ctx.json([]));
  }),
  rest.get(`test-error-500`, (_req, res, ctx) => {
    return res(ctx.status(500));
  }),
  rest.get(`test-error-401`, (_req, res, ctx) => {
    return res(ctx.status(401), ctx.json({ reason: 'Unauthorized user' }));
  }),
  rest.get(`test-status-200`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ test: 'test' }));
  }),
];

const server = setupServer(...handlers);

export { server };
