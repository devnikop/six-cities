import {combineReducers} from 'redux';

import NameSpace from './name-spaces';

import {reducer as data} from './data/data';
import {reducer as favorite} from './favorite/favorite';
import {reducer as review} from './reviews/reviews';
import {reducer as user} from './user/user';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.FAVORITE]: favorite,
  [NameSpace.REVIEW]: review,
  [NameSpace.USER]: user,
});
