import React, { useState, useEffect } from 'react';

import axios from "axios"
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';

import { Button } from '@mui/material';

import FileUpload from 'react-material-file-upload';

import Card from './CardComponent';

import Modal from '@mui/material/Modal';

import Grid from '@mui/material/Grid';

import Step1 from "./Step1.png";
import Step2 from "./Step2.png";
import Step3 from "./Step3.png";

const StepInfo = () => {
    return <>
            <Typography variant="h4" gutterBottom style={{marginBottom: 30, paddingTop: 50, fontWeight: "bold"}}>
                Use ALOE in 3 Simple Steps
            </Typography>

            <Box display="flex" justifyContent={"space-between"}>
                <Card img={Step1} text="1. Connect to your wallet" />
                <Card img={Step2} text="2. Upload your receipt" />
                <Card img={Step3} text="3. Mint your token / view sustainability report" />
            </Box>
           </>
}

export default StepInfo
