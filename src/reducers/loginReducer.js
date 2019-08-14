import { LOGGED_IN, LOGIN_ERROR} from '../actions/types'

const initialState = {
  loggedIn: false,
  user: "",
  loginError: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return {
        loggedIn: true,
        user: action.payload,
        loginError: ""
      };
    case LOGIN_ERROR:
      return {
        loggedIn: false,
        user: "",
        loginError: action.payload
      };
    default: return state;
  };
}
