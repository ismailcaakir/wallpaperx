import axios from 'axios';


export async function details(itemId) {
  axios.get("https://wallhaven-api.now.sh/details/" + itemId, {}).then((obj) => {
      return obj.data;
    }
  );
}
