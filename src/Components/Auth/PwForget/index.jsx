import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../Firebase'
import { useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import validate from '../../../hooks/validationRules'
import { AuthContainer, AuthWindow, AuthForm, ErrorMessage, AuthLink } from '../style'

const PwForget = () => {
    const firebase = useContext(FirebaseContext)
    const history = useHistory()
    const [ firebaseError, setFirebaseError ] = useState()

    const sendEmail = () => {
        firebase.passwordReset(values.email)
        .then(() => history.push('/login'))
        .catch(error => {
            if(error.code === "auth/user-not-found") {
                setFirebaseError("There is no user attached to this email")
            } else {
                setFirebaseError(error.message)
            }
        })
    }

    const [ {errors, values}, handleChange, handleSubmit ] = useForm(sendEmail, validate.forgetValidate)

    return (
        <AuthContainer>
            <AuthWindow page="login">
                <h1>Forgot Password</h1>
                <ErrorMessage firebase={true}>
                    {firebaseError}
                </ErrorMessage>
                <p>Please enter your email address and we will send you an email to reset your password.</p>
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