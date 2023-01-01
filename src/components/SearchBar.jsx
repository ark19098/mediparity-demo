import { Box, Paper } from '@mui/material';
import { Input, Button } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { GoLocation } from "react-icons/go";
import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <Box className='search-bar-container' display='flex'>
            <Box className='search-bar-name'>
                <Box display='flex' className='space-around center-aligned'>
                    <SearchOutlined style={{fontSize: "25px", color: "#1A4E87"}}/>
                    <Input placeholder='Search'  bordered="false" className='input-name'/>
                    <DownOutlined style={{fontSize: "25px", color: "#1A4E87"}}/>
                </Box>
            </Box>
            <Box className='search-bar-location'>
                <Box display='flex' className='space-around center-aligned'>
                    <GoLocation size="25px" color="#1A4E87"/>
                    <Input placeholder='Search'  bordered="false" className='input-location'/>
                    <Button 
                        type="primary" 
                        size="large" 
                        icon={<SearchOutlined style={{fontSize: "40px"}}/>}
                        style={{
                            backgroundColor: "#1A4E87", 
                            width: "90px", 
                            height: "90px", 
                            borderRadius: "45px",
                            margin: "-60px"
                    }} 
                    
                    />
                </Box>
            </Box>
            
        </Box>
    );
}

export default SearchBar;
