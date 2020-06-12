import React, { useContext } from 'react';
import { FirebaseContext } from '../../Firebase'
import useForm from '../hooks/useForm'
import validate from '../hooks/validationRules'
import { AuthContainer, AuthWindow, AuthForm, ErrorMessage, AuthLink } from '../style'

const PwForget = () => {
    const firebase = useContext(FirebaseContext)

    const sendEmail = () => {
        console.log(values.email)
    }

    const { errors, values, handleChange, handleSubmit } = useForm(sendEmail, validate.loginValidate)

    return (
        <AuthContainer>
            <AuthWindow page="login">
                <h1>Forgot Password</h1>
                <p>Please enter your email address and we will send you an email about how to reset your password.</p>
                <AuthForm onSubmit={handleSubmit}>
                    <label>
                        Email:
                    </label>
                    <input type="text" name="email" value={values.email || ''} onChange={handleChange}/>
                    <ErrorMessage>
                        {errors.email || ''}
                    </ErrorMessage>
                    <button type="submit">
                        Submit
                    </button>
                    <AuthLink page="forget" to ="/login">
                        Go Back
                    </AuthLink>
                </AuthForm>
            </AuthWindow>
        </AuthContainer>
    );
};

export default PwForget;