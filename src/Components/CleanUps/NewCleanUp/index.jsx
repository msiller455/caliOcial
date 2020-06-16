import React from 'react';
import { 
    CleanUpsContainer,
    CleanUpsWindow,
    CleanUpForm,
    SelectContainer,
    SelectInput
} from '../style'

const NewCleanUp = (props) => {
    return (
        <CleanUpsContainer>
            <CleanUpsWindow>
                <h1>Create New Clean Up</h1>
                <CleanUpForm>
                    <SelectContainer>
                        <SelectInput>
                            <label>
                                Select a county:
                            </label>
                            <select name="county" size="5">
                                {
                                    props.beachData.counties.map(county => <option value="county" key={county}>{county}</option>)
                                }
                            </select>
                        </SelectInput>
                    </SelectContainer>
                </CleanUpForm>
            </CleanUpsWindow>
        </CleanUpsContainer>
    );
};

export default NewCleanUp;