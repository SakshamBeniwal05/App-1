import React, { useState } from "react";
import { login as reduxLogin } from '../../storage/slices/status'
import authService from "../../services/auth";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "./button";
import Input_Slab from "./input";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()

    // async function Triggred_Login(data) {

    // const session = await authService.login(data)
    //     .then(async () => {
    //         const userData = await authService.currentUser();
    //         dispatch(reduxLogin(userData))
    //     })
    //     .catch((error)=>{console.log(`component : containers : login.jsx : ${error}`);
    //     })
    //
    //
    //
    //
    // Another version of code use to deliver the outcome it can works but i found that it is not optimal so now using {try() catch()} for oprimal outcome

    async function Triggred_Login(data) {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.currentUser();
                if (userData) {
                    dispatch(reduxLogin(userData));
                    navigate('/')
                }
                else {
                    console.log(`component : containers : login.jsx : getting userdata : ${error}`);
                }
            }
            else {
                console.log(`component : containers : login.jsx : getting session : ${error}`);
            }
        } catch (error) {
            setError(error.message)
            console.log(`component : containers : login.jsx : ${error}`);
        }
    }

    return (
        <div className="bg-[#1e1e1e] text-white h-screen flex items-center justify-center">

            {error && <div className="flex items-center justify-between text-red-600 max-w-80 w-full bg-red-600/10 h-10 shadow">
                <div className="h-full w-1.5 bg-red-600"></div>
                <div className="flex items-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon line">
                        <path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.95" d="M11.95 16.5h.1" />
                        <path d="M3 12a9 9 0 0 1 9-9h0a9 9 0 0 1 9 9h0a9 9 0 0 1-9 9h0a9 9 0 0 1-9-9m9 0V7" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5" />
                    </svg>
                    <p className="text-sm ml-2">{error}</p>
                </div>
                <button type="button" aria-label="close" className="active:scale-90 transition-all mr-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>}

            <form onSubmit={handleSubmit(Triggred_Login)}>
                <div className="shadow-2xl">
                    <div className="h-[550px] w-[500px] bg-[#2e2e2e] flex-col rounded-xl p-4 flex justify-center items-center space-y-5">
                        <h1 className="text-4xl ">Log In</h1>

                        <Input_Slab label="Email" placeholder="Enter your email" type="email" {...register('email', { required: true, validate: { matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address", } })} />

                        <Input_Slab label="Password" placeholder="Enter your password" type="password" {...register('password', { required: true, })} />

                        <Button >Sign In</Button>
                        <div className="space-x-1">
                            <span>Don’t have an account?</span>
                            <Link to="/signup" className="text-blue-500 hover:underline">
                                Signup Now
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
            
        </div>
    )
}
export default Login