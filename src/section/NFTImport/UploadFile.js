import React, { useState, useEffect } from 'react';

import axios from "axios"
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';

import { Button } from '@mui/material';

import FileUpload from 'react-material-file-upload';

import { useWeb3React } from "@web3-react/core"

import { loadNFTInfo, approveArtGobbler, isNFTApproved, gobble, getTokenBalance, mintToken } from '../../contract/contract'

import Card from './CardComponent';

import Modal from '@mui/material/Modal';

import Grid from '@mui/material/Grid';

import Step1 from "./Step1.png";
import Step2 from "./Step2.png";
import Step3 from "./Step3.png";

import StepInfo from "./StepInfo";


function ImageUpload() {
  const [files, setFiles] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [info, setInfo] = useState({company: "", score: 0})

  const { active, account, library, connector, activate, deactivate, chainId } = useWeb3React()

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
      getScoreByReceipt()
    }
  };

  const mint = () => {
    mintToken(library, account, info.score)
  }

  // useEffect( ()=> {
  //   if(files && files.length > 0) {
  //     handleFileChange()
  //   }
  // }, [files])


  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const getScoreByReceipt = async () => {
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
  }

  return <div style={{backgroundColor: "#131A22", color: "#DAD7CD", height: "100vh"}}>
        
    
           <Container maxWidth="xl">

           <StepInfo />

           <Box 
             style={{paddingRight: 50, paddingLeft: 50, marginTop: 50}}
             display="flex"
             justifyContent="center"
            >
             
             <Box style={{width: 500, marginBottom: 20}}>
            <FileUpload
              sx={{height: 200, paddingTop: 10, background: "white", color: "green", borderRadius: 5, fontSize: 20}}
              value={files}
              buttonText="Drag or Drop Receipt"
              onChange={setFiles} 
             />
             </Box>
           </Box>
           </Container>
      
      
           <Box 
             display="flex"
             justifyContent="center"
            >
              <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onClose={handleClose}
              >
                <>
                 <Box 
                  display="flex"
                  justifyContent="center"
                  >
                    <Box>
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      style={{ maxWidth: '100%', borderRadius: 5, maxHeight: 600, marginTop: "50%", padding: 50, background: "white"}} 
                    />
              
                    </Box>
              
                </Box>

                <Box 
                  display="flex"
                  justifyContent="center"
                  style={{color: "white", fontWeight: "bold", fontSize: 30}}
                  >
          

                <Button 
                 variant="outlined"
                  style={{paddingLeft: 30, border: "none", paddingTop: 10, paddingBottom: 10, paddingRight: 30, color: "white"}}
                  onClick={handleClose}
                >
                  Company: {info.company}
                </Button>

                <Button 
                 variant="outlined"
                  style={{paddingLeft: 30, border: "none", paddingTop: 10, paddingBottom: 10, paddingRight: 30, color: "white"}}
                  onClick={handleClose}
                >
                  Score: {info.score}
                </Button>
         
         
                <Button 
                 variant="outlined"
                  style={{paddingLeft: 30, border: "none", paddingTop: 10, paddingBottom: 10, paddingRight: 30, color: "white"}}
                  onClick={handleClose}
                >
                  Close
                </Button>
                </Box>
                </>
              </Modal>


              <Container maxWidth="xl" style={{width: 580}}>
              <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    p: 1,
                    m: 1,
                   
                    
                    borderRadius: 1,
                  }}
                >
                       <Button
                         
                          variant="contained" 
                          style={{
                            paddingLeft: 30, paddingTop: 10, paddingBottom: 10, paddingRight: 30,
                            background: "#588157",
                            color: "white"
                          }}
                          onClick={handleFileChange}
                        >
                          Preview Receipt / score
                        </Button>
                        <Button 
                          variant="outlined" 
                          disabled={info.score == 0}
                          style={{paddingLeft: 30, paddingTop: 10, paddingBottom: 10, paddingRight: 30,
                            background: "#588157",
                            color: "white"
                          }} 
                          onClick={mint}>
                          Mint {info.score} Token
                        </Button>
            
              </Box>
              </Container>


           </Box>

         </div>

}

export default ImageUpload;