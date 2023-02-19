import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { toast } from 'react-toastify';
import { useWeb3React } from "@web3-react/core"
import { loadNFTInfo, approveArtGobbler, isNFTApproved, gobble, getTokenBalance } from '../../contract/contract'
import { Button } from '@mui/material';
import UploadFile from "./UploadFile";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { Outlet, Link } from "react-router-dom";

import BalanceAvator from './CirclePerson.png';
import LeafAvator from './Leaf.png';
import HandAvator from './handAvatar.png';

import Step1 from "./Step1.png";
import Step2 from "./Step2.png";
import Step3 from "./Step3.png";

import Card from './CardComponent';
import SwitchLineCard from './SwitchLineCard';

const Page = () => {

    const [ nftAddress, setNFTAddress ] = useState("")
    const [ nftApproved, setNFTApproved ] = useState(false)
    const [ nftId, setNFTId ] = useState("")
    const [ nftInfo, setNftInfo ] = useState({})
    const [ gobblerId, setGobblerId] = useState("")

    const [showBalance, setShowBalance] = useState(false)

    const { active, account, library, connector, activate, deactivate, chainId } = useWeb3React()
    
    const [tokenBalance, setTokenBalance] = useState(0)
    const [score, setScore ] = useState(0) 

    const onShowBalanceChange = async () => {
        setShowBalance(true)
        const balance = await getTokenBalance(library, account)
        setTokenBalance(balance)
        setScore(balance * 270)
    }

    const renderBalance = () => {
    
        if(!showBalance) {
            return <></>
        }

        return <div style={{marginTop: 40}}>
                 <hr />
                           
                            <Box style={{border: "3px solid #344E41", padding: 20, marginTop: 40, marginBottom: 40, paddingTop: 40}}>
                               <Box>

                                <SwitchLineCard 
                                  img={LeafAvator} 
                                  text1={"Token Balance"}
                                  text2={tokenBalance}
                                />

                                <SwitchLineCard 
                                  img={HandAvator} 
                                  text1={"Sustainabilty Score:"}
                                  text2={score}
                                />
                                
                               </Box>
                            

                            </Box>
                            <Box>
                                <Button variant="outlined"
                                onClick={onShowBalanceChange} 
                                style={{paddingLeft: 30, paddingTop: 10, paddingBottom: 10, paddingRight: 10, width: "100%", background: "#344E41",
                                color: "#DAD7CD"
                            }}>
                                    <Link to="/sustainability-report">
                                        View Sustainability Report
                                    </Link>
                                </Button>
                               </Box>
        
               </div>
    }

    return <div style={{backgroundColor: "#131A22", height: "100vh", paddingBottom: 100}}>
                    <Container maxWidth="xl" style={{color: "#DAD7CD"}}>
                        <Grid container spacing={2}>
                        <Grid item xs={12} style={{marginTop: 50, marginBottom: 25}}>
                            <Typography variant="h2" gutterBottom style={{marginBottom: 20, fontWeight: "bold"}}>
                                Encourage Sustainability by Building an On-chain Reputation System
                            </Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Box>
                            <Typography variant="h4" gutterBottom style={{marginBottom: 20, fontWeight: "bold"}}>
                                Use ALOE in 3 Simple Steps
                            </Typography>

                            <Card img={Step1} text="1. Connect to your wallet" />
                            <Card img={Step2} text="2. Upload your receipt here whenever you purchase from any sustainable company" />
                            <Card img={Step3} text="3. Mint your token and view your sustainability report" />

                            </Box>
                            
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={6}>
                            <Box style={{border: "3px solid #344E41", borderRadius: 20, padding: 40, background: "white", color: "#344E41"}}>

                            <Typography variant="h4" gutterBottom style={{marginBottom: 40}}>
                                Enter account
                            </Typography>
                            <TextField 
                            id="outlined-basic" 
                            // label="Account address"
                            value={account}
                            variant="outlined"
                            style={{marginBottom: 30, width: "100%"}} 
                            />
                            <Box   
                                display="flex"
                                justifyContent="center"
                                // style={{marginBottom: 60}}
                            >
                                <Button variant="outlined"
                                onClick={onShowBalanceChange} 
                                style={{paddingLeft: 30, paddingTop: 10, paddingBottom: 10, paddingRight: 10, width: "100%", background: "#344E41",
                                color: "#DAD7CD"
                                }}>
                                    View Balance
                                </Button>
                            </Box>
                                    
                            {renderBalance()}
                           
                            </Box>
                        </Grid>
                        </Grid>
                    
                    </Container>

           </div>

    

          
}

export default Page