import React , { useState , useContext } from 'react'

import { TodoContext } from '../../TodoContext'

import { withStyles } from '@material-ui/core/styles';
import {
    InputLabel,
    MenuItem,
    FormControl,
    Select 
} from '@material-ui/core';

const StyledFormControl = withStyles(theme => ({
    root:{
        width: '17rem',
        '& label': {
            fontSize: 'var(--fontSize-sm)', //Label font size
            fontFamily: 'Montserrat', //Label font family
            color: 'var(--color-label)', // Label color
            top: '5px', // Label position-top
            left: '6px', //Label position-left
            '& + .MuiInputBase-root': {
                fontSize: 'var(--fontSize-md)', //Select input font size
                fontFamily: 'Montserrat', //Select input font family
                color: 'var(--color-default)', //Select input text color
                padding: '.5rem',  //Select input padding
                boxShadow: '0 .2rem 1.8rem -.5rem #000000', //Select input box shadow
                borderRadius: '.3rem', //Input border radius
            },
            '& + .MuiInput-underline': {
                '&:before': {
                    borderColor: 'var(--color-default)' // Underline color
                },
                '&:hover:before': {
                    borderColor: 'var(--color-default)', // Underline color on hover
                }
            }
        },
        //Select input label styles when it's shrinked
        '& .MuiInputLabel-shrink':{
            transform: 'translate(0, -.6rem) scale(0.75)',
            fontFamily: 'Montserrat'
        },
        //Select input styles for svg icon
        '& svg': {
            color: 'var(--color-default)',
            top: '30%',
            right: '1rem'
        }
    }
}))(FormControl);


function InputSelect() {
    const { contextFilter } = useContext(TodoContext);

    const [filter,setFilter] = contextFilter;

    const [state, setState] = useState('all');

    const handleChange = (event) => {
        setState(event.target.value);
        setFilter(event.target.value);
    };

    return (
        <StyledFormControl>
            <InputLabel id="label">All</InputLabel>
            <Select
                labelId="label"
                id="select"
                value={state}
                onChange={handleChange}
            >
                <MenuItem value={'all'}>All</MenuItem>
                <MenuItem value={'completed'}>Completed</MenuItem>
                <MenuItem value={'uncompleted'}>Uncompleted</MenuItem>
            </Select>
      </StyledFormControl>
    )
}

export default InputSelect
