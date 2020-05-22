import React from 'react';
import { SignUpContainer, SignUpWindow, SignUpForm } from './style'

const SignUp = () => {
    return (
        <SignUpContainer>
            <SignUpWindow>
                <h1>Sign up</h1>
                <SignUpForm>
                    <label>
                        Username:
                    </label>
                    <input type="text" name="username"/>
                    <button type="submit">
                        Create Profile
                    </button>
                </SignUpForm>
            </SignUpWindow>
        </SignUpContainer>
    );
};

export default SignUp;