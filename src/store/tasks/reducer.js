import { ADD_NEW_TASK, DELETE_TASK } from './actionType';

const initialState = [
    { id: 0, name: 'Привычка №1' },
    { id: 2, name: 'Привычка №2' },
    { id: 3, name: 'Привычка №3' },
    { id: 4, name: 'Привычка №4' },
];

export default function tasks(state = initialState, actions = {}) {
    switch (actions.type) {
        case ADD_NEW_TASK:
            return addNewTask(state, actions.payload);
            break;
        case DELETE_TASK:
            return state;
            break;
        default:
            return state;
            break;
    }
}

function addNewTask(state, data) {
    const r = state.map(({ id }) => id === data.id);
    if (!r.lenght) {
        return [...state, data];
    }
    return state;
}

export const getTask = (state) => state.tasks;
