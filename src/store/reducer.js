import { SET_DATA, SET_LOADING } from "./actionType";

const initialSatte = {
  dataJSON: [],
  loading: false,
};

export default function reducer(state = initialSatte, action) {
  switch (action.type) {
    case SET_DATA:
      const data = {
        ...state,
        dataJSON: action.payload,
      };
      return data;

    case SET_LOADING:
      const load = {
        ...state,
        loading: action.payload,
      };
      return load;

    default:
      return state;
  }
}
