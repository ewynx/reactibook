import { combineReducers} from 'redux';
import postReducer from './postReducer';
import loginReducer from './loginReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  posts: postReducer,
  login: loginReducer,
  form: formReducer
});
