import {
  FollowUserFailure,
  FollowUserStart,
  FollowUserSuccess,
  StoreUserFailure,
  StoreUserStart,
  StoreUserSuccess,
} from '../reducers/userReducer';

export const loadUser = () => async (dispatch) => {
  try {
    dispatch(StoreUserStart());
    const res = await fetch('/api/auth/loadUser', {
      method: 'GET',
    });
    const result = await res.json();
    if (result.success) {
      dispatch(StoreUserSuccess(result.message));
    } else {
      dispatch(StoreUserFailure(result.message));
    }
  } catch (error) {
    dispatch(StoreUserFailure(error.message));
  }
};
export const followUser = (id) => async (dispatch) => {
  try {
    dispatch(FollowUserStart());
    const res = await fetch(`/api/user/follow/${id}`, {
      method: 'POST',
      credentials: 'include',
    });
    const result = await res.json();
    console.log(result);
    if (result.success) {
      dispatch(FollowUserSuccess(result.message));
    } else {
      dispatch(FollowUserFailure(result.message));
    }
  } catch (error) {
    dispatch(FollowUserFailure(error.message));
  }
};
