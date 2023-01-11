import { AUTHENTICATE_USER, AUTHENTICATE_USER_ERROR, GET_POSTS, ADD_POST } from "../types";
import { getPosts, authenticateUser, addPost } from '../../services';


export const authenticate = (userData) => (dispatch, getState) => {
  try {
    authenticateUser(userData).then((data) => {
        dispatch({
            type: AUTHENTICATE_USER,
            payload: data.data
          });
    })
  } catch (error) {
    dispatch({ type: AUTHENTICATE_USER_ERROR,
        payload: 'username or password incorrect'
    })
    console.log("Error", error);
  }
};

export const getAllPosts = () => (dispatch, getState) => {

    try {
            getPosts().then((data) => {
                dispatch({
                    type: GET_POSTS,
                    payload: data.data
                  });
            })
        
      } catch (error) {
        console.log("Error", error);
      }

}
export const addaPost = (post) => (dispatch, getState) => {
    try {
            addPost(post).then((data) => {
                dispatch({
                    type: ADD_POST,
                    payload: data.data
                  });
            })
        
      } catch (error) {
        console.log("Error", error);
      }

}

