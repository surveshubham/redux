import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '@/redux/slices/userDetailSlice';
import { AppDispatch, RootState } from '@/redux/store';

const Login = () => {

    const dispatch = useDispatch<AppDispatch>()

    const { user } = useSelector((state: RootState) => state.app)

    useEffect(() => {
        dispatch(fetchUser())
    }, []);


    const handleSubmit = async (userName: any, pass: any) => {
        const res = await fetch(`https://dummyjson.com/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // expiresInMins: 60, // optional
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                username: userName,
                password: pass,
                expiresInMins: 60, // optional
            }),
        });

        const respo = await res.json();
        localStorage.setItem("token", respo.token);
        localStorage.setItem("ID", respo.id);
        console.log(respo.username);
    };

    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-rows-1 gap-5 md:gap-10 px-4">
            {user != null && <>
                {user?.map((item: any, index: number) => {
                    return (
                        <div className="bg-black text-white flex text-center rounded-2xl   cursor-pointer pl-2 py-1  " key={item.username} onClick={() => { handleSubmit(item.username, item.password) }}>

                            <Image src={item.image} alt={''} width="40" height="5" className='h-auto w-auto p-2 rounded-full border-2 border-white bg-white/70 ' priority />
                            <p className="py-5 px-3 font-bold">{item.username}</p>
                        </div>
                    )
                })}
            </>}
        </div>
    )
}

export default Login;