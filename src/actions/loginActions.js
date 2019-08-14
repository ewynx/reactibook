import { db } from '../firebase';
import { LOGGED_IN, LOGIN_ERROR} from '../actions/types'

export const login = (data) => (dispatch) => {
  db.collection('users').where("username", "==", data.username)
    .get()
    .then(function(querySnapshot) {
      if(!querySnapshot.empty) {
        if(querySnapshot.docs[0].data().password === data.password) {
          dispatch({
            type: LOGGED_IN,
            payload: data.username
          })
        } else {
          console.log("Login error");
          dispatch({
            type: LOGIN_ERROR,
            payload: "Unknown user or wrong password"
          })
        }
      }
    })
    .catch(function(error) {
        console.log("Error getting documents from users table: ", error);
    });
}
