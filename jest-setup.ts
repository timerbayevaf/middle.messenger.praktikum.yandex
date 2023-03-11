// jest.setup.ts
import '@testing-library/jest-dom';

import { server } from 'utils/test/mock-api';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
