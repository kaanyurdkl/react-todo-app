import React , { useContext } from 'react';

import { TodoContext } from '../../TodoContext';

import Input from './InputText';
import Select from './InputSelect';

import {
    Grid,
    Box,
    Fab
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

import AddIcon from '@material-ui/icons/Add';

import { motion } from 'framer-motion';

//Material Ui  styles
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'var(--color-primary)',
        boxShadow:'0 .2rem 1.8rem -.3rem #000000',
        transform: 'translateY(15%)',
        [theme.breakpoints.up('sm')]: {
            transform: 'translateY(5%)'
        },
        '&:hover': {
            backgroundColor: 'var(--color-primary-light)'
        }
    }
}));

const Form = () => {
    //motion.js animation variants
    const variantsInputText = {
        hidden: { opacity: 0 , x: "-100%"},
        visible: { opacity: 1 , x: 0},
    }

    const variantsButton = {
        hidden: { opacity: 0 , x: "100%"},
        visible: { opacity: 1 , x: 0},
    }

    const variantsInputSelect = {
        hidden: { opacity: 0 , x: "-100%"},
        visible: { opacity: 1 , x: 0},
    }

    const classes = useStyles();

    //Context APIs
    const { contextTodo , contextTodos } = useContext(TodoContext);

    const [todo,setTodo] = contextTodo;
    const [todos,setTodos] = contextTodos;

    const submitHandler = (e) => {
        e.preventDefault();

        if(todo !== ''){
            setTodos([...todos,{
                id: Math.random()*1000,
                todoText: todo,
                status: false
            }]);
            setTodo('');
        }
    }

    return (
            <Box>
                <Grid container spacing={3}>
                    <Grid item container xs={12}>
                        <form onSubmit={submitHandler} style={{width:'100%'}}>
                            <Grid container spacing={3}>
                                <Grid item container justify="flex-start" xs={9}>
                                    <motion.div initial="hidden"
                                                animate="visible"
                                                transition={{ duration: .5, delay: .2 }}
                                                variants={variantsInputText}>
                                        <Input />
                                    </motion.div>
                                </Grid>
                                <Grid item container justify="flex-end"  alignContent="flex-end" xs={3}>
                                    <motion.div initial="hidden"
                                                animate="visible"
                                                transition={{ duration: .5, delay: .2 }}
                                                variants={variantsButton}>
                                        <Fab 
                                            onSubmit={submitHandler}
                                            className={classes.root}
                                            type="submit"
                                            size="medium">
                                            <AddIcon style={{color: 'var(--color-default)'}} fontSize="large"/>
                                        </Fab>
                                    </motion.div>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid item container justify="flex-start" xs={12}>
                        <motion.div initial="hidden"
                                    animate="visible"
                                    transition={{ duration: .5, delay: .3 }}
                                    variants={variantsInputSelect}>
                            <Select />
                        </motion.div>
                    </Grid>
                </Grid>
            </Box>
    )
}

export default Form;

