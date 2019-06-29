import {combineReducers} from 'redux';
import {reducer as data} from './data/data';
import {reducer as review} from './reviews/reviews';
import {reducer as user} from './user/user';
import NameSpace from './name-spaces';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.REVIEW]: review,
  [NameSpace.USER]: user,
});
