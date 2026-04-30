'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const { register, handleSubmit,watch,formState:{errors} } = useForm()

    const handleLoginFunc = async(data) => {
        console.log(data, "data");
      const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
console.log(res,error);  
    }
   

    return (
        <div className='container mx-auto bg-slate-100 h-[80vh] flex justify-center items-center'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='text-3xl  text-center font-bold mb-5'>Login your account</h2>
                <form onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                        <label className="label">Email</label>
                        <input type="email" className="input"
                            placeholder="Email"
                            {...register("email",{required: "Email is required"})} />
                            {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}

                        <label className="label">Password</label>
                        <input type="password" className="input"
                            placeholder="Password"
                            {...register("password",{required: "Password is required"})} />

                            {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}

                    </fieldset>
                     <button  className="btn btn-neutral mt-4">Login</button>
                </form>
                <p className='mt-5'>Don't have an account? <Link href={"/register"} className='text-blue-400'>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;