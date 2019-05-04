import React from 'react';
import { Route } from 'react-router-dom';
import Login from './page/Login';
import SignOut from './page/SignOut';
import ApplyMember from './page/ApplyMember';

const MyRouter = (props) => {
    return <>
        <Route path="/login" component={Login} ></Route>
        <Route path="/signout" component={SignOut} ></Route>
        <Route path="/apply-member" component={ApplyMember} ></Route>
    </>
}

export default MyRouter;