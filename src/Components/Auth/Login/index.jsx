import React, { useState } from 'react';
import { AuthContainer, AuthWindow, AuthForm, ErrorMessage } from '../style'

const Login = () => {
    
    const [ formData, setFormData ] = useState({
        email: "",
        password: ""
    })

    const [ errorMessages, setErrorMessages ] = useState({
        email: "",
        password: "",
        error: ""
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        checkFormData()
    }

    const checkFormData = () => {
        emailCheck(formData.email)
        passwordCheck(formData.password)
    }

    const emailCheck = (email) => {
        if(!email.length) {
            setErrorMessages((prevState) => ({
                ...prevState,
                email: "Please enter your email"
            }))
        } else {
            setErrorMessages((prevState) => ({
                ...prevState,
                email: ""
            }))
        }
    }

    const passwordCheck = (password) => {
        if(!password.length) {
            setErrorMessages((prevState) => ({
                ...prevState,
                password: "Please enter your password"
            }))
        } else {
            setErrorMessages((prevState) => ({
                ...prevState,
                password: ""
            }))
        }
    }

    return (
        <AuthContainer>
            <AuthWindow page="login">
                <h1>Login</h1>
                <AuthForm onSubmit={handleSubmit}>
                    <label>
                        Email:
                    </label>
                    <ErrorMessage>{errorMessages.email}</ErrorMessage>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                    <label>
                        Password:
                    </label>
                    <ErrorMessage>{errorMessages.password}</ErrorMessage>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                    <button type="submit">
                        Login
                    </button>
                </AuthForm>
            </AuthWindow>
        </AuthContainer>
    );
};

export default Login;