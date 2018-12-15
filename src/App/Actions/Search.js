import { SEARCH_INPUT_CHANGED, SEARCH_DATA_UPDATED, SEARCH_SPINNER } from '../Keys';
import axios  from 'axios';


export const searchInputChanged = (text) => {
  return (dispatch) => {
    data = {end: true, totalPages: 0, images: []};
    dispatch(searchDataUpdated(data));

    status = true;
    dispatch(searchSpinnerStatus(status));

    dispatch({
      type: SEARCH_INPUT_CHANGED,
      payload: text
    })

    const keyword = text;
    axios.get("https://wallhaven-api.now.sh/search", {
        params: { keyword: keyword }
      }).then((obj) => {
        data = obj.data;
        dispatch(searchDataUpdated(data));
      }
    );
  };
};

export const searchDataUpdated = (data) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_DATA_UPDATED,
      payload: data
    })
    status = false;
    dispatch(searchSpinnerStatus(status));
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
