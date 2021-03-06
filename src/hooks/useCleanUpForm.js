import { useState, useEffect } from 'react'

const useCleanUpForm = (callback, validate, beaches) => {
    const [county, setCounty] = useState('')
    const [dateTime, setDateTime] = useState(new Date())
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    }, [errors])

    const handleSubmit = (event) => {
        if (event) event.preventDefault()
        setErrors(validate(values))
        setIsSubmitting(true)
    }

    const handleChange = (event) => {
        event.persist()
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }))
    }

    const handleDateChange = date => setValues(values => ({
        ...values,
        dateTime: date
    }))

    
    const handleCountyChange = (event) => {
        event.persist()
        setCounty(event.target.value)
    }
    
    const handleBeachChange = (event) => {
        event.persist()
        const beach = beaches.find(beach => beach.ID === parseInt(event.target.value))
        setValues(values => ({
            ...values,
            beach
        }))
    }

    return {
        county,
        dateTime,
        values,
        errors,
        setDateTime,
        handleChange,
        handleSubmit,
        handleCountyChange,
        handleBeachChange,
        handleDateChange
    }
}

export default useCleanUpForm