import React from 'react';
import { Link } from 'react-router-dom';
import './SubHeader.scss';

const SubHeader = () => {
    //주석 나중에 제거하거나 다듬을 것
    return (
        <div className='SubHeader__wrapper'>
            {/*wrapper 전체를 감싸는 부분*/}
            <div className='SubHeader__Logo'>
                {/*수채화 백그라운드 넣어 봅시다*/}
                <Link to='/'>
                    <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcnAIp5%2FbtqFnOrXu4B%2F2naGmXsdhF1fwvPgWy9ALK%2Fimg.png' />
                </Link>
            </div>
            <nav>
                {/*내비게이터*/}
                <ul>
                    <li>
                        <Link to='/allPalette'>
                            <span>모든 색갈피 보기</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/signIn'>
                            <span>로그인</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/signUp'>
                            <span>회원가입</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/MyPage'>
                            <span>내 색갈피</span>
                        </Link>
                    </li>
                    <li>
                        <button>로그아웃</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SubHeader;
