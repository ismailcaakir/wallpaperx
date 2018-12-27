import { SEARCH_INPUT_CHANGED, SEARCH_DATA_UPDATED, SEARCH_SPINNER, SEARCH_LOAD_MORE_SPINNER } from '../Keys';

const INITIAL_STATE = {
  query: 'Space',
  searchApiData: {end: true, totalPages: 0, images: [], currentPage: 0},
  searchSpinner: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_INPUT_CHANGED:
      return { ...state, query: action.payload };
      break;
    case SEARCH_DATA_UPDATED:
      let data = { ...state.searchApiData, images: action.payload.images, end: action.payload.end, totalPages: action.payload.totalPages, currentPage: action.payload.currentPage};
      return { ...state, searchApiData: data};
      break;
    case SEARCH_SPINNER:
      return { ...state, searchSpinner: action.payload };
    case SEARCH_LOAD_MORE_SPINNER:
      return { ...state, searchLoadMoreSpinner: action.payload };
    default:
      return state;
  }
};
