import React,{useEffect,useContext} from 'react';
import { FirebaseContext } from '../firebase';

const SignOut = (props)=>{
    const {firebase} = useContext(FirebaseContext);
    useEffect(()=>{
        console.log('아웃');
        firebase.doSignOut().then(()=>props.history.push('/'));
    },[])
    return <></>
}

export default SignOut;