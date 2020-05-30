import { ADD_NEW_TASK, DELETE_TASK } from './actionType';

export const addTask = (data) => async (dispatch) => {
    dispatch({ type: ADD_NEW_TASK, payload: data });
};

export const deleteTask = (data) => async (dispatch) => {
    dispatch({ type: DELETE_TASK });
};
