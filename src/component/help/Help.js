import {  Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import helpdata from './Data';

function Help() {
    return (
        <div style={{
            padding: '70px 0px',
        }} >
            <Typography variant='h2' sx={{
                textAlign: 'center',
                margin: 'auto',
                width: '25rem',
                fontSize: '2.19rem',
                lineHeight: ' 2.84rem',
                maxWidth: ' 23.13rem',
                letterSpacing: '0.06em',
                color: '#545454'

            }}>
                How you can help our shelter
            </Typography>


            <Grid container sx={{ width: { xs: '90%', md: '70%' } }} mx={'auto'} mt={3} spacing={2} justifyContent={'center'}>
                {helpdata.map((item) => {
                    return (
                        <Grid item md={2.4} xs={6} sm={4} >
                            <Stack alignItems={"center"}>
                                <img src={item.imgurl}  alt="helps"/>
                                <Typography gutterBottom variant="h5" mt={2} sx={{
                                    fontSize:{md:'20px',xs:'14px'},fontWeight:500
                                }}>
                                    {item.title}
                                </Typography> 
                            </Stack>
                                
                            
                        </Grid>
                    );
                })}

            </Grid>
        </div>
    )
}

export default Help
