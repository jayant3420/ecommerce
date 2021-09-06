import axios from "axios";
import url from "../../Url/url";

export const productLikeUpdate = (id, like) => {
  return async (dispatch) => {
    const response = await axios({
      url: `${url}/store/likedUpdate`,
      method: "put",
      data: { id: id, liked: like }
    });
    if ((await response.status) === 200) {
      dispatch({ type: "PRODUCTLIKEUPDATE", payload: { id: id, liked: like } });
    }
  };
};
