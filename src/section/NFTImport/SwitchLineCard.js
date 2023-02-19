import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';

const SwitchLineCard = (props) => {

    const {img, text1, text2 } = props

    return  <Box style={{fontSize: 25, marginBottom: 20}} display="flex" justifyContent={'flex-start'}>
    <Box style={{marginRight: 20}}>
        <img src={img} style={{width: 80, height: 80}} />
    </Box>
    <Box display="flex" alignItems={"center"} style={{fontWeight: "bold"}}>
        {text1} <br /> {text2}
    </Box>
    </Box>
    
}

export default SwitchLineCard
