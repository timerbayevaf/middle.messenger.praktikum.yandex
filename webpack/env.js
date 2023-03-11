const env = process.env.NODE_ENV || 'development';

const ENVS = {
  __DEV__: env === 'development',
  __PROD__: env === 'production',
};

const GLOBAL_ARGS = {
  ...ENVS,
  'process.env': {
    ...ENVS,
    NODE_ENV: JSON.stringify(env),
    PORT: process.env.PORT || 3000,
  },
};

module.exports = { env, GLOBAL_ARGS, ENVS };
