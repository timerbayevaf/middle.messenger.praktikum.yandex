enum MODAL_TYPE {
  PROFILE,
  USER,
  MESSAGE,
  ADD_USER,
  REMOVE_USER,
  NONE,
}

enum StoreEvents {
  Updated = 'updated',
}

export { MODAL_TYPE, StoreEvents };
export { CHATLIST_VIEW, PROFILE_TITLE } from './chats';
export { METHODS } from './request';
export * from './specs';
export { ROUTE_TYPES, ROUTES } from './routes';
