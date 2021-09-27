import { SET_DATA, SET_LOADING } from "./actionType";

export function setData(data) {
  const newData = {
    type: SET_DATA,
    payload: data,
  };
  return newData;
}

export function setLoading(load) {
  const theLoad = {
    type: SET_LOADING,
    payload: load,
  };
  return theLoad;
}

export function fetchData() {
  return async function (dispatch, setState) {
    try {
      dispatch(setLoading(true));
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );

      if (response.ok) {
        const result = await response.json();
        dispatch(setData(result));
      } else {
        throw Error;
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
}
