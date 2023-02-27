import { CHATLIST_VIEW } from 'constants';

function getViewType(query: { viewType?: string }): CHATLIST_VIEW {
  let _viewType = CHATLIST_VIEW.CHAT_LIST;

  const viewFromQuery = query.viewType;

  Object.values(CHATLIST_VIEW).forEach((key) => {
    if (key === viewFromQuery) {
      _viewType = key;
    }
  });

  return _viewType;
}

export { getViewType };
