import { DETAIL_SPINNER, DETAIL_ITEM_ID_CHANGED, DETAIL_DATA_UPDATED } from '../Keys';
import axios  from 'axios';


export const detailItemIdChanged = (itemId) => {
  return (dispatch) => {

    dispatch({
      type: DETAIL_ITEM_ID_CHANGED,
      payload: itemId
    })

    dispatch({
      type: DETAIL_DATA_UPDATED,
      payload: {category: null, colors: [], fullImage: null, height: null, size: null, tags: [], views: null}
    });

    status = true;
    dispatch(detailDataSpinnerStatus(status));

    dispatch(detailDataUpdated(itemId));

  };
};

export const detailDataUpdated = (itemId = null) => {

  return (dispatch) => {

    axios.get("https://wallhaven-api.now.sh/details/" + itemId, {})
    .then((obj) => {
      data = obj.data;
      dispatch(detailDataSpinnerStatus(false));
      dispatch({
        type: DETAIL_DATA_UPDATED,
        payload: data
      });
    });

  };
};

export const detailDataSpinnerStatus = (status) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_SPINNER,
      payload: status
    })
  };
};
