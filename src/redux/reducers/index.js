import { ADD_POST, AUTHENTICATE_USER, AUTHENTICATE_USER_ERROR, GET_POSTS } from "../types";

const INITIAL_STATE = {
    userData: {},
    posts: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
        if(!action.payload.error)
            localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        userData:{...action.payload},
      };
    case AUTHENTICATE_USER_ERROR:
      return {
        ...state,
        userData: {},
      };
    case ADD_POST:
        return {
            ...state, 
            posts: [...state.posts, action.payload]
        }
    case GET_POSTS:
        return {
            ...state, 
            posts: [...action.payload]
        }
    default:
      return INITIAL_STATE;
  }
};

export default userReducer;