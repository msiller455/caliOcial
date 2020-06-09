import React from 'react';
import useForm from '../hooks/useForm'
import validate from '../hooks/validationRules'
import { AuthContainer, AuthWindow, AuthForm, ErrorMessage } from '../style'

const Login = () => {

    const login = () => {
        console.log(values)
        console.log('WE LOGGED IN')
    }

    const { errors, values, handleChange, handleSubmit } = useForm(login, validate.loginValidate)
    
    return (
        <AuthContainer>
            <AuthWindow page="login">
                <h1>Login</h1>
                <AuthForm onSubmit={handleSubmit}>
                    <label>
                        Email:
                    </label>
                    <input type="text" name="email" value={values.email || ''} onChange={handleChange}/>
                    <ErrorMessage>
                        {errors.email || ''}
                    </ErrorMessage>
                    <label>
                        Password:
                    </label>
                    <input type="password" name="password" value={values.password || ''} onChange={handleChange}/>
                    <ErrorMessage>
                        {errors.password || ''}
                    </ErrorMessage>
                    <button type="submit">
                        Login
                    </button>
                </AuthForm>
            </AuthWindow>
        </AuthContainer>
    );
};

export default Login;