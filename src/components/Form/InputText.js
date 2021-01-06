import React , { useContext } from 'react'

import { TodoContext } from '../../TodoContext'

import TextField from '@material-ui/core/TextField'

import { withStyles } from '@material-ui/core/styles'

const CustomTextField = withStyles(theme => ({
    root: {
        width: '17rem',
        [theme.breakpoints.up('sm')]: {
            width: '30rem'
        },
        [theme.breakpoints.up('lg')]: {
            width: '40rem'
        },
        '& input': {
            fontSize: 'var(--fontSize-md)', //Input font size
            fontFamily: 'Montserrat', //Input font family
            color: 'var(--color-default)', //Input text color
            padding: '1rem'  //Input padding
        },
        '& label': {
            fontSize: 'var(--fontSize-sm)', //Label font size
            fontFamily: 'Montserrat', //Input font family
            color: 'var(--color-label)', // Label color
            top: '.3rem', // Label position-top
            left: '.6rem', //Label position-left
            [theme.breakpoints.up('sm')]:{//Label styles for medium screens
                top: '.3rem'
            },
            [theme.breakpoints.up('lg')]:{//Label styles for large screens
                fontSize: 'var(--fontSize-md)',
                top: '1.1rem'
            },
            '&.Mui-focused': {
                color: theme.palette.primary // Label color on focus
            },
            '& + .MuiInput-formControl': {
                height: '3.5rem', //Input height
                borderRadius: '.3rem', //Input border radius
                boxShadow: '0 .2rem 1.8rem -.5rem #000000', //Input box shadow
                [theme.breakpoints.up('lg')]: { //Input height for large devices
                    height: '5rem'
                }
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
        '& .MuiInputLabel-shrink':{
            transform: 'translate(0, -.5rem) scale(0.75)', //Shrinked input label
            [theme.breakpoints.up('sm')]: {
                transform: 'translate(0, -.9rem) scale(0.75)'//Shrinked input label for medium devices
            },
            [theme.breakpoints.up('lg')]: {
                transform: 'translate(0, -1.4rem) scale(0.75)'//Shrinked input label for large devices
            }
        },
    }
}))(TextField);


function Input() {
    const { contextTodo } = useContext(TodoContext);

    const [todo,setTodo] = contextTodo;

    const changeHandler = (e) => {
        setTodo(e.target.value)
    }

    return <CustomTextField onChange={changeHandler}
                            value={todo}
                            label="Enter your task"
                            required/>
}

export default Input
