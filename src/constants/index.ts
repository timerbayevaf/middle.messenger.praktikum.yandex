enum CHATLIST_VIEW {
  SEARCH = 'search',
  CHAT_LIST = 'list',
  VIEW_PROFILE = 'view_profile',
  EDIT_PROFILE = 'edit_profile',
  EDIT_PASSWORD = 'edit_password',
}

enum PROFILE_TITLE {
  VIEW = 'Профиль',
  EDIT = 'Редактирование',
}

enum MODAL_TYPE {
  PROFILE,
  USER,
  MESSAGE,
  NONE,
}

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export { PROFILE_TITLE, CHATLIST_VIEW, MODAL_TYPE, METHODS };
