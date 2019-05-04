import React, { useEffect, useContext, useReducer } from 'react';
import { FirebaseContext } from '../firebase';

const UserContext = React.createContext(null);

const UserReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, ...action.payload };
        case 'LOGOUT':
            return null;
        default:
            return null;
    }
}

const UserContextProvider = (props) => {
    const [state, dispatch] = useReducer(UserReducer, null);
    const { firebase } = useContext(FirebaseContext);
    useEffect(() => {
        console.log('User reducer 시작');
       const unsubscriber = firebase.setUserDispatcher(dispatch);
       return ()=>unsubscriber();
    }, [])
    return <UserContext.Provider value={{ state, dispatch }}>
        {props.children}
    </UserContext.Provider>
}

export { UserContextProvider,UserContext };