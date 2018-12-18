import { SEARCH_INPUT_CHANGED, SEARCH_DATA_UPDATED, SEARCH_SPINNER, SEARCH_LOAD_MORE_SPINNER } from '../Keys';
import axios  from 'axios';


export const searchInputChanged = (text) => {
  return (dispatch) => {

    dispatch({
      type: SEARCH_INPUT_CHANGED,
      payload: text
    })

    keyword = text; nextPage = 1;
    dispatch(searchDataUpdated(keyword, nextPage));

    status = true;
    dispatch(searchSpinnerStatus(status));

  };
};

export const searchDataUpdated = (keyword, nextPage, data = { end: true, totalPages: 1, images: [], currentPage: 1}) => {
  return (dispatch) => {

    status = true;
    dispatch(searchLoadMoreSpinnerStatus(status));

    axios.get("https://wallhaven-api.now.sh/search", {
        params: { keyword: keyword, page: nextPage }
      }).then((obj) => {

        data.end = obj.data.end;
        data.totalPages = obj.data.totalPages;

        if (obj.data.images.length > 0) {
          data.images = data.images.concat(obj.data.images);
        }

        dispatch({
          type: SEARCH_DATA_UPDATED,
          payload: data
        });

        status = false;
        dispatch(searchSpinnerStatus(status));
        dispatch(searchLoadMoreSpinnerStatus(status));
      }
    );

  };
};

export const searchSpinnerStatus = (status) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_SPINNER,
      payload: status
    })
  };
};

export const searchLoadMoreSpinnerStatus = (status) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_LOAD_MORE_SPINNER,
      payload: status
    })
  };
};
