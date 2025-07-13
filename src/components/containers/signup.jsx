import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./button";
import Input_Slab from "./input";
import { useForm } from "react-hook-form";
import { login as reduxLogin } from '../../storage/slices/status'
import { useDispatch } from "react-redux";
import authService from "../../services/auth";

const Sign_Up = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()

    async function create_Account() {
        try {
            const userData = await authService.currentUser(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(reduxLogin);
                    navigate('/')
                }
            }
        }
        catch (error) {
            console.log(`component : containers : signup.jsx : creating : ${error}`);
        }
    }

    return (
        <div>
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

            <form onSubmit={handleSubmit(create_Account)}>
                <div className="shadow-2xl">
                    <div className="h-[550px] w-[500px] bg-[#2e2e2e] flex-col rounded-xl p-4 flex justify-center items-center space-y-5">
                        <h1 className="text-4xl ">Sign Up</h1>

                        <Input_Slab label="Username" placeholder="Enter your full name" {...register('name', { required: true, })} />
                        <Input_Slab label="E-mail" placeholder="Enter your email" type="email" {...register('email', {
                            required: true, validate: { matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address", }
                        })} />
                        <Input_Slab label="Password" placeholder="Enter your password" type="password" {...register('password', { required: true, })} />
                        <Button type="submit" >Sign Up</Button>
                        <div className="space-x-1">
                            <span>Have an account?</span>
                            <Link to="/login" className="text-blue-500 hover:underline">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Sign_Up