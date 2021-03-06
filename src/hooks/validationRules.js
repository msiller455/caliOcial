const emailRegEx = /\S+@\S+\.\S+/
const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

const signUpValidate = (values) => {
    const errors = {}

    if(!values.username) {
        errors.username = 'Username is required'
    }

    if(!values.name) {
        errors.name = 'Name is required'
    }

    if(!values.email) {
        errors.email = 'Email address is required'
    } else if(!emailRegEx.test(values.email)) {
        errors.email = 'Please enter a valid email address'
    }

    if(!values.passwordOne) {
        errors.passwordOne = 'Password is required'
    } else if(!passwordRegEx.test(values.passwordOne)) {
        errors.passwordOne = 'Password must be at least 8 characters and include at least 1 uppercase letter and 1 number'
    }

    if(!values.passwordTwo || values.passwordTwo !== values.passwordOne) {
        errors.passwordTwo = 'Please make sure your passwords match'
    }

    return errors
}

const loginValidate = (values) => {
    const errors = {}

    if(!values.email) {
        errors.email = 'Email address is required'
    } else if(!emailRegEx.test(values.email)) {
        errors.email = 'Please enter a valid email address'
    }

    if(!values.password) {
        errors.password = 'Password is required'
    }
    return errors
}

const forgetValidate = (values) => {
    const errors = {}

    if(!values.email) {
        errors.email = 'Email address is required'
    } else if(!emailRegEx.test(values.email)) {
        errors.email = 'Please enter a valid email address'
    }

    return errors
}

const createCleanUp = (values) => {
    const errors = {}

    if(!values.beach) {
        errors.beach = 'Please select a beach'
    }

    if(!values.name) {
        errors.name = 'Please provide a name for this clean up'
    }

    if(!values.description) {
        errors.description = 'Please provide a description for this clean up'
    }

    return errors
}

export default {
    signUpValidate,
    loginValidate,
    forgetValidate,
    createCleanUp
}
