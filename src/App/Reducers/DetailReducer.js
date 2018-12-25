import { DETAIL_SPINNER, DETAIL_ITEM_ID_CHANGED, DETAIL_DATA_UPDATED } from '../Keys';

const INITIAL_STATE = {
  itemId: null,
  data: {},
  spinner: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DETAIL_ITEM_ID_CHANGED:
      return { ...state, itemId: action.payload };
      break;
    case DETAIL_SPINNER:
      return { ...state, spinner: action.payload };
      break;
    case DETAIL_DATA_UPDATED:
      return { ...state, data: action.payload};
      break;
    default:
      return state;
  }
};
