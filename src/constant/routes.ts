enum ROUTE_TYPES {
  CHAT_LIST,
  SIGNUP,
  LOGIN,
  BROKEND,
  NOT_FOUND,
}

const ROUTES: Record<ROUTE_TYPES, string> = {
  [ROUTE_TYPES.CHAT_LIST]: '/messenger',
  [ROUTE_TYPES.SIGNUP]: '/signup',
  [ROUTE_TYPES.LOGIN]: '/login',
  [ROUTE_TYPES.BROKEND]: '/brokend',
  [ROUTE_TYPES.NOT_FOUND]: '/404',
};

export { ROUTE_TYPES, ROUTES };
