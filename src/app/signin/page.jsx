'use client'
import { usePostUserMutation } from '@/redux/features/baseApi';
import { mountUser } from '@/redux/features/userSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const SignIn = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const router = useRouter()
    const dispatch = useDispatch()
    const [setUser, {isLoading}] = usePostUserMutation()
    const handleSignIn = async (data) =>{
        // console.log(data);
        const res = await setUser(data);
        if(res){
            // console.log(res.data)
            const payload = {
                    token: res?.data?.data?.token,
                    email: data?.email,
                    name: 'Test User',
                    email_verified: true
            }
            dispatch(mountUser(payload))
            router.push('/')
        }
    }
    return (
        <section className='flex flex-col md:flex-row bg-slate-200 p-6 h-screen'>
            <div className='w-full md:w-1/2'>
            <Image className='w-full h-full object-cover' alt='login-image' src={'https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={1920} height={1080}/>
            </div>
            <form onSubmit={handleSubmit(handleSignIn)} className='bg-white md:px-20 p-4 w-full md:w-1/2'>
                <h2 className="text-3xl my-4 font-semibold text-slate-900">
                    Sign in
                </h2>
                <div className="flex flex-col mt-8 space-y-4">
                    <label className='text-slate-900 font-semibold'>Email</label>
                    <input {...register('email', {required: true})} type="email" placeholder='Email' className="border border-slate-900 px-4 py-2" />
                    {errors?.email && <p className='my-2 text-red-500'>Please enter email</p>}
                </div>
                <div className="flex flex-col space-y-4">
                    <label className='text-slate-900 mt-8 font-semibold'>Password</label>
                    <input {...register('password', {required: true})} type="text" placeholder='Password' className="border border-slate-900 px-4 py-2" />
                    {errors?.password && <p className='my-2 text-red-500'>Please enter password correctly</p>}
                </div>
                <input type="submit" disabled={isLoading ? true : false} value={isLoading ? 'Loading....' : 'Submit'} className='px-4 py-2 bg-yellow-400 text-slate-900 hover:text-yellow-400 mt-8 hover:bg-slate-900' />
            </form>
        </section>
    );
};

export default SignIn;