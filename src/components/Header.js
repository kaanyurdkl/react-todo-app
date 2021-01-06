import React from 'react';

import { motion } from 'framer-motion';

import Typography from '@material-ui/core/Typography';

function Header() {
    //motion.js animation variants
    const variants = {
        hidden: { opacity: 0 , y: "-100%"},
        visible: { opacity: 1 , y: 0},
    }
    return (<motion.div initial="hidden"
                        animate="visible"
                        transition={{ duration: .5, delay: .1}}
                        variants={variants}>
                <Typography variant="h1" style={{fontFamily: 'Montserrat, sans-serif'}}>MY TODO LIST</Typography>
            </motion.div>
            )
}

export default Header
