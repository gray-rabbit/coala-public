import React, { useContext, useState, useEffect } from 'react';
import Input from './components/input';
import { FirebaseContext } from '../firebase';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../reducers/userReducer';

const Login = (props) => {
	console.log('로그인시작');
	const [error, setError] = useState(null);
	const [id, setId] = useState(null);
	const [password, setPassword] = useState(null);
	const { state, dispatch } = useContext(UserContext);
	const { firebase } = useContext(FirebaseContext);
	const history = props.history;
	const changeHandler = (id, value) => {
		if (id === 'id')
			setId(value);
		else if (id === 'password')
			setPassword(value);
	}
	const clickHandler = () => {
		if (id === null || password === null || id === '' || password === '')
			setError('id와 password는 빈칸일 수 없습니다.');
		else
			firebase.doSignInWithEmailAndPassword(id, password)
				.then(result => console.log(result))
				.catch(error => setError(error.message));
	}
	const signInGoogle = () => {
		firebase.doSignInGoogle().then(result => console.log(result));
	}

	return (
		<div className="container" >
			로그인페이지
        <div className="field">
				<div className="field-label has-text-left">
					<label className="label">Email</label>
				</div>
				<Input
					type='text'
					id='id'
					changeHandler={changeHandler}
					className="input"
					placeholder='E-mail을 입력하세요'
				></Input>
				<div className="field-label has-text-left">
					<label className="label">Password</label>
				</div>
				<Input
					type='password'
					id='password'
					className="input"
					changeHandler={changeHandler}
					placeholder='Password를 입력하세요'
				></Input>
			</div>

			<div className="container" style={{ marginTop: '1rem' }}>
				<div className="columns is-mobile">
					<div className="column">
						<button className="button is-info is-outlined is-fullwidth" onClick={clickHandler}>로그인</button>
					</div>
					<div className="column">
						<button className="button is-primary is-outlined is-fullwidth" onClick={clickHandler}>회원가입</button>
					</div>
				</div>
				<div className="columns is-mobile">
					<div className="column is-half is-offset-one-quarter">
						<button className="button is-danger is-outlined is-fullwidth" onClick={signInGoogle}><i className="fab fa-google has-text-danger" />Sign In Google</button>
					</div>
				</div>
			</div>
			{id},{password}
			{error}
			{state && <Redirect to='/'></Redirect>}
		</div>
	)
}
export default Login;