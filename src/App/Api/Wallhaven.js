import axios  from 'axios';


export default async function(itemId) {
  axios.get("https://wallhaven-api.now.sh/details/" + itemId, {}).then((obj) => {
      return obj.data;
    }
  );
}
