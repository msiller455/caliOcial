import React from 'react';
import useForm from '../hooks/useForm'
import validate from '../hooks/validationRules'
import { AuthContainer, AuthWindow, AuthForm, ErrorMessage } from '../style'

const SignUp = () => {

    const signUp = () => {
        console.log(values)
        console.log('WE SIGNED UP')
    }

    const { errors, values, handleChange, handleSubmit } = useForm(signUp, validate.signUpValidate)

    return (
        <AuthContainer>
            <AuthWindow>
                <h1>Sign up</h1>
                <AuthForm onSubmit={handleSubmit}>
                    <label>
                        Username:
                    </label>
                    <input type="text" name="username" value={values.username || ''} onChange={handleChange} />
                    <ErrorMessage>
                        {errors.username || ''}
                    </ErrorMessage>
                    <label>
                        Name:
                    </label>
                    <input type="text" name="name" value={values.name || ''} onChange={handleChange} />
                    <ErrorMessage>
                        {errors.name || ''}
                    </ErrorMessage>
                    <label>
                        Email:
                    </label>
                    <input type="text" name="email" value={values.email || ''} onChange={handleChange} />
                    <ErrorMessage>
                        {errors.email || ''}
                    </ErrorMessage>
                    <label>
                        Password:
                    </label>
                    <input type="password" name="passwordOne" value={values.passwordOne || ''} onChange={handleChange} />
                    <ErrorMessage>
                        {errors.passwordOne || ''}
                    </ErrorMessage>
                    <label>
                        Confirm Password:
                    </label>
                    <input type="password" name="passwordTwo"value={values.passwordTwo || ''} onChange={handleChange} />
                    <ErrorMessage>
                        {errors.passwordTwo || ''}
                    </ErrorMessage>
                    <button type="submit">
                        Create Profile
                    </button>
                </AuthForm>
            </AuthWindow>
        </AuthContainer>
    );
};

export default SignUp;