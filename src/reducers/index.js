import { combineReducers } from 'redux';
import { activeProfileCard, activeReportsName, activeReportURL } from './reducer_active_personfile';

const rootReducer = combineReducers({
  activeProfileCard,
  activeReportsName,
  activeReportURL
});

export default rootReducer;
