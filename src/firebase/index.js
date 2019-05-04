import Firebase from './firebase';
import React, {createContext} from 'react';

const FirebaseContext = createContext(null);


const FirebaseProvider = (props)=>{
    return <FirebaseContext.Provider value={{firebase: new Firebase()}}>
        {props.children}
    </FirebaseContext.Provider>
}

export {FirebaseProvider,FirebaseContext}