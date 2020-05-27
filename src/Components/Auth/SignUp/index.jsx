import React, { useState } from 'react';
import { AuthContainer, AuthWindow, AuthForm, ErrorMessage } from '../style'

const SignUp = () => {

    const [ formData, setFormData ] = useState({
        username: '',
        name: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
    })

    const [ errorMessages, setErrorMessages ] = useState({
        username: '',
        name: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: ''
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
        usernameCheck(formData.username)
        nameCheck(formData.name)
        emailCheck(formData.email)
        passwordOneCheck(formData.passwordOne)
        passwordTwoCheck(formData.passwordOne, formData.passwordTwo)
    }

    const usernameCheck = (username) => {
        if(!username.length) {
            setErrorMessages((prevState) => ({
                ...prevState,
                username: "Please enter your username"
            }))
        } else {// ADD CHECK IF USERNAME ALREADY EXISTS
            setErrorMessages((prevState) => ({
                ...prevState,
                username: ""
            }))
        }
    }

    const nameCheck = (name) => {
        if(!name.length) {
            setErrorMessages((prevState)=> ({
                ...prevState,
                name: "Please enter your name"
            }))
        } else {
            setErrorMessages((prevState) => ({
                ...prevState,
                name: ""
            }))
        }
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

    const passwordOneCheck = (passwordOne) => {
        const pwRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
        if(!passwordOne.match(pwRegEx)) {
            setErrorMessages((prevState) => ({
                ...prevState,
                passwordOne: "Password must be at least 8 characters and include at least 1 uppercase letter and 1 number"
            }))
        } else {
            setErrorMessages((prevState) => ({
                ...prevState,
                passwordOne: ""
            }))
        }
    }

    const passwordTwoCheck = (passwordOne, passwordTwo) => {
        if(passwordOne !== passwordTwo) {
            setErrorMessages((prevState) => ({
                ...prevState,
                passwordTwo: "Passwords must match"
            }))
        } else {
            setErrorMessages((prevState) => ({
                ...prevState,
                passwordTwo: ""
            }))
        }
    }

    return (
        <AuthContainer>
            <AuthWindow>
                <h1>Sign up</h1>
                <AuthForm onSubmit={handleSubmit}>
                    <label>
                        Username:
                    </label>
                    <ErrorMessage>
                        {errorMessages.username}
                    </ErrorMessage>
                    <input type="text" name="username" value={formData.username} onChange={handleChange}/>
                    <label>
                        Name:
                    </label>
                    <ErrorMessage>
                        {errorMessages.name}
                    </ErrorMessage>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                    <label>
                        Email:
                    </label>
                    <ErrorMessage>
                        {errorMessages.email}
                    </ErrorMessage>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                    <label>
                        Password:
                    </label>
                    <ErrorMessage>
                        {errorMessages.passwordOne}
                    </ErrorMessage>
                    <input type="password" name="passwordOne" value={formData.passwordOne} onChange={handleChange}/>
                    <label>
                        Confirm Password:
                    </label>
                    <ErrorMessage>
                        {errorMessages.passwordTwo}
                    </ErrorMessage>
                    <input type="password" name="passwordTwo"value={formData.passwordTwo} onChange={handleChange}/>
                    <button type="submit">
                        Create Profile
                    </button>
                </AuthForm>
            </AuthWindow>
        </AuthContainer>
    );
};

export default SignUp;