import { Box, Paper } from '@mui/material';
import { Stack } from '@mui/system';
import { Button } from 'antd';
import React from 'react';
import HospitalDetailsCard from './HospitalDetailsCard';
import SearchBar from './SearchBar';
import SelectAntd from './SelectAntd';

const HospitalsContainer = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", margin: 10}}>
            <Paper elevation={0} sx={{backgroundColor: "#F5F5F5", width: 1000, borderRadius: "30px"}}>
                <SearchBar/>
                <Stack direction="row" margin={5} className='space-evenly'>
                    <Button type="primary" shape="round" style={{backgroundColor: "#1A4E87"}}> SORT BY </Button>
                    <SelectAntd/>
                    <SelectAntd/>
                    <SelectAntd/>
                </Stack>
                <Stack spacing={5} margin={2}>
                    <HospitalDetailsCard/>
                    <HospitalDetailsCard/>
                    <HospitalDetailsCard/>
                </Stack>               
            </Paper>
            
        </Box>
    );
}

export default HospitalsContainer;
