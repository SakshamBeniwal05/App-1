import React, { useState } from "react";
import { login as reduxLogin } from '../../storage/slices/status'
import authService from "../../services/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const dispatch = useDispatch();
    const navigate  = useNavigate();
    const [error, setError] = useState("")

    async function Triggred_Login(data) {

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
                    else{
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
    }
    return (
        <div></div>
    )
}
export default Login
