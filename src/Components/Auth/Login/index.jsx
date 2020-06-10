import React, { useContext } from 'react';
import { FirebaseContext } from '../../Firebase'
import useForm from '../hooks/useForm'
import validate from '../hooks/validationRules'
import { AuthContainer, AuthWindow, AuthForm, ErrorMessage } from '../style'

const Login = () => {
    const firebase = useContext(FirebaseContext)

    const login = () => {
        firebase.login(values.email, values.password)
        .then(authUser => console.log(authUser))
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