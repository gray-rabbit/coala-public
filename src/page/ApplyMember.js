import React, { useContext, useState } from 'react';
import Input from './components/input';
import { UserContext } from '../reducers/userReducer';
import { FirebaseContext } from '../firebase';

const ApplyMember = (props) => {
    const [name, setName] = useState(null);
    const [nickname, setNickname] = useState(null);
    const [phone, setPhone] = useState(null);
    const [info, setInfo] = useState(null)
    const [loading, setLoading] = useState('');
    const { state } = useContext(UserContext);
    const { firebase } = useContext(FirebaseContext);
    const inputChangeHandler = (id, value) => {
        console.log(name);
        switch (id) {
            case 'name':
                return setName(value);
            case 'nickname':
                return setNickname(value);
            case 'phone':
                return setPhone(value);
            case 'info':
                return setInfo(value);
        }
    }
    const onApply = (e) => {
        e.preventDefault();
        setLoading('is-loading');
        const { uid, displayName, email } = state;
        const data = { uid, displayName, email, name, nickname, phone, info }
        firebase.firestore.collection('applyMember').add({ ...data }).then((r) => {
            console.log(r)
            setLoading('');
        });
    }
    return (
        <section className="section">
            <h1 className="title">강사신청</h1>
            <form>
                <Input type="text" id='name' className="input is-rounded" placeholder="실명" changeHandler={inputChangeHandler}></Input>
                <Input type="text" id='nickname' className="input is-rounded" placeholder="닉네임" changeHandler={inputChangeHandler}></Input>
                <Input type="number" id='phone' className="input is-rounded" placeholder="휴대폰 번호" changeHandler={inputChangeHandler}></Input>
                <Input type="text" id='info' className="input is-rounded" placeholder="강사지원 동기" changeHandler={inputChangeHandler}></Input>
                <button className={`button is-primary is-fullwidth ${loading}`} onClick={onApply}>신청하기</button>
            </form>
        </section>
    )
}

export default ApplyMember;