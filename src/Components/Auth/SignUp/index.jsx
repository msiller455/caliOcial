import React from 'react';
import useForm from '../hooks/useForm'
import { AuthContainer, AuthWindow, AuthForm } from '../style'

const SignUp = () => {

    const signUp = () => {
        console.log(values)
    }

    const { values, handleChange, handleSubmit } = useForm(signUp)

    return (
        <AuthContainer>
            <AuthWindow>
                <h1>Sign up</h1>
                <AuthForm onSubmit={handleSubmit}>
                    <label>
                        Username:
                    </label>
                    <input type="text" name="username" value={values.username || ''} onChange={handleChange} required />
                    <label>
                        Name:
                    </label>
                    <input type="text" name="name" value={values.name || ''} onChange={handleChange} required />
                    <label>
                        Email:
                    </label>
                    <input type="email" name="email" value={values.email || ''} onChange={handleChange} required />
                    <label>
                        Password:
                    </label>
                    <input type="password" name="passwordOne" value={values.passwordOne || ''} onChange={handleChange} required />
                    <label>
                        Confirm Password:
                    </label>
                    <input type="password" name="passwordTwo"value={values.passwordTwo || ''} onChange={handleChange} required />
                    <button type="submit">
                        Create Profile
                    </button>
                </AuthForm>
            </AuthWindow>
        </AuthContainer>
    );
};

export default SignUp;