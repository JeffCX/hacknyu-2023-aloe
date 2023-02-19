import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';

import Step1 from "./Step1.png";
import Step2 from "./Step2.png";
import Step3 from "./Step3.png";

const ReportCard = (props) =>  {

    let { color } = props

    if(!color) {
        color = "#CDD9D0"
    }

    return <Box
    display="flex"
    justifyContent={"space-around"}
    style={{background: color, fontSize: 20, padding: 25, fontWeight: "bold", borderBottom: "4px solid black"}}
>
    <Box  display="flex" justifyContent={'flex-start'}>
        <Box style={{marginRight: 20}}>
            <img src={Step1} style={{width: 50, height: 50}} />
        </Box>
        <Box display="flex" alignItems={"center"} style={{fontWeight: "bold"}}>
            Matt.eth
        </Box>
    </Box>

    <Box  display="flex" justifyContent={'flex-start'}>
        <Box style={{marginRight: 20}}>
            <img src={Step1} style={{width: 50, height: 50}} />
        </Box>
        <Box display="flex" alignItems={"center"} style={{fontWeight: "bold"}}>
            2500 points
        </Box>
    </Box>

</Box>

}

export default ReportCard


