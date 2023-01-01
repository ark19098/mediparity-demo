import React, {useState} from 'react';
import {Box, Card, CardActions, CardContent, Paper, Typography, Rating} from '@mui/material';
import { Stack } from '@mui/system';
import { Button } from 'antd';
import './HospitalsContainer.css'

// const {Text, Title, Paragraph, Link} = Typography;

const HospitalDetailsCard = () => {

    const [rating, setRating] = useState(3.5);
    return (
        <Box elevation={0} className='hsp-container-style'>
                <Stack direction="row" padding={5} paddingTop={2} paddingBottom={2} className='center-aligned' >
                    <Stack spacing={1} marginRight={10}>
                        
                        <Typography>BPSUR3252</Typography>
                        <Typography sx={{fontWeight: "bold"}}>Bypass Surgery</Typography>
                    </Stack>
                    <Stack spacing={2}>
                        <Typography  variant="h6" color="#1A4E87" sx={{fontWeight: "bold"}}>Alexis Hospital</Typography>
                        <Typography color="#1A4E87" sx={{fontWeight: "bold"}}>12, xyz street, pqr, ABC - 001001</Typography>
                        <Typography color="#1A4E87" sx={{fontWeight: "bold", fontSize:"12px"}}>2 Miles Away</Typography>
                    </Stack>
                    <Stack sx={{width: "200px"}}>
                    </Stack>
                    <Stack marginRight={5} className='center-aligned'>
                        <Typography variant="h3" color="#1A4E87" sx={{fontWeight: "bold"}}>$50</Typography>
                        <Typography color="#1A4E87" sx={{fontSize:"12px"}}>Cash Price</Typography>
                    </Stack>
                    <Stack spacing={2}>                    
                        <Button type="default" shape="round" style={{borderWidth: "2px", borderColor: "#1A4E87"}}> See All Rates </Button>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            precision={0.5}
                            style={{color: "#1A4E87"}}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                    </Stack>
                </Stack>
        </Box>
    );
}

export default HospitalDetailsCard;
