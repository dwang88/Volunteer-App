import React from 'react';
import { Card as MuiCard, Button, Typography, CardMedia, CardContent, Box} from '@mui/material';
import { AccessTime, AttachMoney } from '@mui/icons-material';


import '../components/Card.css';



export default function Card({component, height, image, alt, title, body, button}) {
  return (
    <MuiCard className="card" style={{ border: "none", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', display: 'flex'}}>
        <CardMedia 
        component={component}
        height={height}
        image={image}
        alt={alt}
        className="image">
        </CardMedia>
        
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent className="content">
        <Box className="title">
        <Typography variant='h5'>{title}</Typography>
        </Box>
        <Box className="bodyText">
        <Typography variant='body2'>{body}</Typography>
        </Box>
        <Box className='button'>
        <Button variant="contained">{button}</Button>
        </Box>
        <Box className='icons'>
        <ul className='iconsList'>
        <li><AttachMoney/></li>
        <li><AccessTime/></li>
        </ul>
        </Box>
        </CardContent>
      </Box>
    </MuiCard>
    )
}
