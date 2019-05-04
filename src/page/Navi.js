import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../reducers/userReducer';

const Navi = (props) => {
    const { state } = React.useContext(UserContext)
    return <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                하하하
            </div>
            <div className="navbar-menu">
                <Link to='/' className="navbar-item">홈</Link>
                {
                    state
                        ? (<>
                            <Link to='/offline' className="navbar-item">오프라인 강의</Link>
                            <Link to='/online' className="navbar-item">온라인 강의</Link>
                            <Link to='/apply-member' className="navbar-item">강사신청</Link>
                            <Link to='/signout' className="navbar-item"  >로그아웃</Link>
                        </>)
                        : <Link to='/login' className="navbar-item">로그인</Link>
                }

            </div>
        </nav>
    </div >
}

export default Navi;