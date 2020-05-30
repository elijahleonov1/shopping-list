import { combineReducers } from 'redux';
import tasks, * as selectTask from './tasks/reducer';

export default combineReducers({ tasks });

export { selectTask };
