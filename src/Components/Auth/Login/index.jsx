import React from 'react';
import useForm from '../hooks/useForm'
import { AuthContainer, AuthWindow, AuthForm } from '../style'

const Login = () => {

    const login = () => {
        console.log(values)
    }

    const { values, handleChange, handleSubmit } = useForm(login)
    
    return (
        <AuthContainer>
            <AuthWindow page="login">
                <h1>Login</h1>
                <AuthForm onSubmit={handleSubmit}>
                    <label>
                        Email:
                    </label>
                    <input type="email" name="email" value={values.email || ''} onChange={handleChange}/>
                    <label>
                        Password:
                    </label>
                    <input type="password" name="password" value={values.password || ''} onChange={handleChange}/>
                    <button type="submit">
                        Login
                    </button>
                </AuthForm>
            </AuthWindow>
        </AuthContainer>
    );
};

export default Login;