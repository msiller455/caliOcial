import React, { useContext } from 'react';
import { FirebaseContext } from '../../Firebase';
import { AuthUserContext } from '../../Session'
import useCleanUpForm from '../../../hooks/useCleanUpForm'
import validate from '../../../hooks/validationRules'
import { useHistory } from 'react-router-dom'
// import DateTimePicker from 'react-datetime-picker';
 
import { 
    CleanUpsContainer,
    CleanUpsWindow,
    CleanUpForm,
    SelectContainer,
    SelectInput,
    InputContainer,
    ErrorMessage,
    CleanUpDateTimePicker
} from '../style'

const NewCleanUp = (props) => {
    const firebase = useContext(FirebaseContext)
    const authUser = useContext(AuthUserContext)
    const history = useHistory()
    
    const createCleanUp = () => {
        console.log(dateTime.toString())
        const data = {
            createdBy: authUser.uid,
            dateTime: dateTime.toString(),
            ...values
        }
        firebase.createCleanUp(data)
        .then(() => history.push('/cleanups'))
        .catch(error => console.log(error))
    }

    const parseCounty = county => {
        return county === '3_Central Coast' ?
        'Central Coast'
        : county
    }

    const { county, dateTime, values, errors, setDateTime, handleChange, handleSubmit, handleCountyChange, handleBeachChange, handleDateChange } = useCleanUpForm(createCleanUp, validate.createCleanUp, props.beachData.beaches)

    return (
        <CleanUpsContainer>
            <CleanUpsWindow>
                <h1>Create New Clean Up</h1>
                <CleanUpForm onSubmit={handleSubmit}>
                    <SelectContainer>
                        <SelectInput county={true}>
                            <label>
                                Select a county:
                            </label>
                            <select name="county" size="5" onChange={handleCountyChange}>
                                {
                                    props.beachData.counties.map(county => <option value={county} key={county}>{parseCounty(county)}</option>)
                                }
                            </select>
                        </SelectInput>
                        <SelectInput>
                            <label>
                                Select a beach:
                            </label>
                            <select name="beach" size="5" onChange={handleBeachChange}>
                                {
                                    county
                                    ? props.beachData.beaches
                                        .filter(beach => beach.COUNTY === county)
                                        .map(beach => <option value={beach.ID} key={beach.ID}>{beach.NameMobileWeb}</option>)
                                    : <option>Please select a county</option>
                                }
                            </select>
                            <ErrorMessage>
                                {errors.beach || ''}
                            </ErrorMessage>
                        </SelectInput>
                    </SelectContainer>
                    <CleanUpDateTimePicker name="dateTime" value={dateTime} onChange={setDateTime} clearIcon={null}/>
                    <InputContainer>
                        <label>
                            Name of Clean Up Event:
                        </label>
                        <input type="text" name="name" value={values.name || ''} onChange={handleChange} />
                        <ErrorMessage>
                            {errors.name || ''}
                        </ErrorMessage>
                        <label>
                            Description:
                        </label>
                        <textarea name="description" value={values.description || ''} onChange={handleChange} />
                        <ErrorMessage>
                            {errors.description || ''}
                        </ErrorMessage>
                    </InputContainer>
                    <button type="submit">Create Clean Up</button>
                </CleanUpForm>
            </CleanUpsWindow>
        </CleanUpsContainer>
    );
};

export default NewCleanUp;