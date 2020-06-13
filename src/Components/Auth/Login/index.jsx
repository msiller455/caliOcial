import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../Firebase'
import useForm from '../hooks/useForm'
import validate from '../hooks/validationRules'
import { useHistory } from 'react-router-dom'
import { AuthContainer, AuthWindow, AuthForm, ErrorMessage, AuthLink, PwMessageContainer } from '../style'

const Login = () => {
    const firebase = useContext(FirebaseContext)
    const history = useHistory()
    const [ firebaseError, setFirebaseError ] = useState('')

    const login = () => {
        firebase.login(values.email, values.password)
        .then(authUser => history.push('/home'))
        .catch(error => setFirebaseError(error.message))
    }

    const { errors, values, handleChange, handleSubmit } = useForm(login, validate.loginValidate)
    
    return (
        <AuthContainer>
            <AuthWindow page="login">
                <h1>Login</h1>
                <ErrorMessage firebase={true}>
                    {firebaseError}
                </ErrorMessage>
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
                    <PwMessageContainer>
                        <ErrorMessage>
                            {errors.password || ''}
                        </ErrorMessage>
                        <AuthLink to="/pwforget">
                            Forgot Password?
                        </AuthLink>
                    </PwMessageContainer>
                    <button type="submit">
                        Login
                    </button>
                </AuthForm>
            </AuthWindow>
        </AuthContainer>
    );
};

export default Login;