import React from 'react';
import { Link } from 'react-router-dom';

const SubHeader = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/signIn'>로그인</Link>
                </li>
                <li>
                    <Link to='/signUp'>회원가입</Link>
                </li>
                <li>
                    <Link to='/MyPage'>내 색갈피</Link>
                </li>
                <li>
                    <button>로그아웃</button>
                </li>
            </ul>
            <div>
                <Link to='/'>로고</Link>
            </div>
            <div>
                <Link to='/allPalette'>모든 색갈피 보기</Link>
            </div>
        </div>
    );
};

export default SubHeader;
