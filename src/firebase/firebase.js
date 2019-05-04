import app from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

import {config} from '../config';


class Firebase {
    constructor() {
        this.dispatch = null;
        this.app = app.initializeApp(config);
        this.firestore = this.app.firestore();
        this.auth = this.app.auth();
    }
    doCreateUserWithEmailAndPassword = (email, password) => {
        return this.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password)
    }
    doSignInWithEmailAndPassword = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password)
    }
    doSignInGoogle = () => {
        return this.auth.signInWithPopup(new app.auth.GoogleAuthProvider());
    }
    doSignOut = () => {
        this.dispatch({type:'LOGOUT'});
        return this.auth.signOut();
    }
    getCurrentUser = () => {
        return this.auth.currentUser;
    }
    setUserDispatcher = (dispatch) => {
        this.dispatch = dispatch;
        return this.auth.onAuthStateChanged(user => {
            if (user === null) dispatch({ type: 'LOGOUT' });
            else this.dispatch({ type: 'LOGIN', payload: user });
        })
    }
}


export default Firebase;
