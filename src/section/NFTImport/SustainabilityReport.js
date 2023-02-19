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

import SwitchLine from "./SwitchLineCard"

import StepInfo from "./StepInfo";

import ReportCard from "./ReportCard"

function ImageUpload() {
  const [files, setFiles] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [info, setInfo] = useState({})

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleFileChange = () => {
    if(files) {
      const file = files[0];
      setPreviewUrl(URL.createObjectURL(file));
      handleOpen()
    }
  };

  // useEffect( ()=> {
  //   if(files && files.length > 0) {
  //     handleFileChange()
  //   }
  // }, [files])


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', files[0]);
    try {
      const response = await axios.post('https://blooming-coast-82572.herokuapp.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setInfo(response.data)
      
      // Handle successful response from the server
    } catch (error) {
      console.error(error);
      // Handle error from the server
    }
  };

  return <div style={{backgroundColor: "#131A22", color: "#DAD7CD", height: "100vh"}}>
        
    
           <Container maxWidth="xl">

           <StepInfo />
            
            <div style={{backgroundColor: "#FDFFFC", padding: "5%", marginTop: 20}}>
           <Grid container spacing={2} style={{color: "#344E41"}}>
                <Grid item xs={6}>
                    <Typography variant="h4" gutterBottom style={{marginBottom: 20, fontWeight: "bold"}}>
                        Sustainability Score
                    </Typography>
                    <SwitchLine 
                      img={Step1}
                      text1="Token Balance"
                      text2="0.014"
                    />
                    <SwitchLine 
                      img={Step1}
                      text1="Token Balance"
                      text2="0.014"
                    />

                    <Typography variant="h4" gutterBottom style={{marginBottom: 20, color: "#344E41", fontWeight: "bold"}}>
                        Receipt Updates
                    </Typography>
                    <SwitchLine 
                      img={Step1}
                      text1="Token Balance"
                      text2="0.014"
                    />
                    <SwitchLine 
                      img={Step1}
                      text1="Token Balance"
                      text2="0.014"
                    />
                    <SwitchLine 
                      img={Step1}
                      text1="Token Balance"
                      text2="0.014"
                    />

                </Grid>
                <Grid item xs={6}>
                    
                    <Typography variant="h4" gutterBottom style={{marginBottom: 20, color: "#344E41", fontWeight: "bold"}}>
                        Leadership Board
                    </Typography>

                    <Box style={{background: "#FAF3DD", fontSize: 20, padding: 25, fontWeight: "bold", borderRadius: 10}}>
                        You are in the top 10% of Leadership Board. You have 200 more points than 3rd place.
                    </Box>

                    <Box style={{marginTop: 30}}>


                    </Box>

                    <ReportCard />
                    <ReportCard color="#FAF3DD"/>
                    <ReportCard />
                    <ReportCard />
                

                </Grid>
            </Grid>
            </div>

           </Container>

         </div>

}

export default ImageUpload;