import { SEARCH_INPUT_CHANGED, SEARCH_DATA_UPDATED, SEARCH_SPINNER } from '../Keys';

const INITIAL_STATE = {
  query: 'Space',
  searchApiData: {end: true, totalPages: 0, images: []},
  searchSpinner: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_INPUT_CHANGED:
      return { ...state, query: action.payload };
      break;
    case SEARCH_DATA_UPDATED:
      return { ...state, searchApiData: action.payload };
    case SEARCH_SPINNER:
      return { ...state, searchSpinner: action.payload };
    default:
      return state;
  }
};
