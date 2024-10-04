"use client";

import Header from '@/app/(app)/Header';
import { useState } from 'react'; // useState 훅을 import 합니다.



const State = () => { // 컴포넌트 이름은 React로 유지합니다.
    const [message, setMessage] = useState(''); // 상태 변수 선언

    const displayMessage = () => { // 메시지를 업데이트하는 함수
        setMessage('Hello, World!'); // 상태를 업데이트합니다.
    };

    return (
        <>
            <Header title="State" />
            <h1>{message}</h1> {/* 상태값을 화면에 표시 */}
            <button onClick={displayMessage}>Click Me</button> {/* 버튼 클릭 시 displayMessage 호출 */}
        </>
    );
};

export default State; // 컴포넌트를 기본 내보냅니다.
