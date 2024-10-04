"use client";

import Header from '@/app/(app)/Header';
import { useState } from 'react';
import axios from '@/lib/axios'; // axios import

const Write = () => {
    const [note, setNote] = useState(''); // note 상태 관리
    const [errors, setErrors] = useState([]); // 오류 상태 관리

    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 동작 방지
        await write(note); // note 값을 서버에 전송
    };

    const csrf = () => axios.get('/sanctum/csrf-cookie'); // CSRF 토큰 요청

    const write = async (note) => {
        await csrf(); // CSRF 토큰 요청

        try {
            await axios.post('/write', { note }); // note를 서버에 POST 요청
        } catch (error) {
            if (error.response.status === 422) {
                setErrors(error.response.data.errors); // 오류 처리
            } else {
                throw error; // 다른 오류는 throw
            }
        }
    };

    return (
        <>
            <Header title="Write" />
            <div className='p-5'>
                <div className='text-3xl mb-5'>글 작성하기</div>
                <form onSubmit={handleSubmit}>
                    <input
                        className='w-full rounded h-24 mb-5'
                        type='text'
                        id='note'
                        name='note'
                        value={note} 
                        onChange={(e) => setNote(e.target.value)} // input 변화 감지
                    />
                    <button
                        type="submit" 
                        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        글작성
                    </button>
                    {errors.length > 0 && (
                        <div className="text-red-500">
                            {errors.map((error, index) => (
                                <div key={index}>{error}</div>
                            ))}
                        </div>
                    )}
                </form>
            </div>
        </>
    );
}

export default Write;
