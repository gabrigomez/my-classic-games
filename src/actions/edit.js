import { editUsername } from '../services/edit.service'
import { EDIT_USER } from './types';

export const editUser = (id, username) => async(dispatch) => {
  try {
    const res = await editUsername(id, username);

    dispatch({
      type: EDIT_USER,
      payload: username
    });

    return Promise.resolve(res.username)

  } catch (err) {

    return Promise.reject(err);
  }
};