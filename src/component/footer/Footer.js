import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import footerimg from '../../images/footer-puppy.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function Footer() {
    return (
        <div style={{
            backgroundColor: "#39312d",
            color: "white",
            paddingTop: "70px"
        }}
        >
            <Grid container sx={{ width: { xs: '95%', md: '70%' } }} mx={"auto"} spacing={3} alignItems={"center"}>
                 
                <Grid item md={4} xs={12}>
                    <Typography variant='h2' sx={{
                      
                        width: { md: '25rem' ,xs:'20rem'},
                        fontSize: '2.19rem',
                        lineHeight: ' 2.84rem',
                        maxWidth: ' 23.13rem',
                        letterSpacing: '0.06em',
                        color: 'white',
                        margin:{xs:'auto',md:0}

                    }}>
                        For questions and suggestions
                    </Typography>

                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={2} mt={4}
                        color={"#f1cdb3"}
                        justifyContent={{ xs: 'center',md:'start' }}>
                        <MailOutlineIcon sx={{ fontSize: '50px' }} />
                        <Typography sx={{ fontSize: '20px' }}>
                            abcd@gmail.com
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={2} mt={4} color={"#f1cdb3"} justifyContent={{ xs: 'center', md: 'start' }}>
                        <CallIcon sx={{ fontSize: '50px' }} />
                        <Typography sx={{fontSize:'20px'}}>
                          123-345-678-9000
                        </Typography>
                    </Stack>
                </Grid>



                <Grid item md={4} xs={12} >
                    <Typography variant='h2' sx={{
                      
                        width: { md: '25rem', xs: '20rem' },
                        fontSize: '2.19rem',
                        lineHeight: ' 2.84rem',
                        maxWidth: ' 23.13rem',
                        letterSpacing: '0.06em',
                        color: 'white',
                        margin: { xs: 'auto', md: 0 }

                    }}>
                        We are waiting
                        for your visit
                    </Typography>
                    <Stack direction={"row"} alignItems={"center"} spacing={2} mt={5} color={"#f1cdb3"} justifyContent={{ xs: 'center', md: 'start' }}>
                        <LocationOnIcon sx={{ fontSize: '50px' }} />
                        <Typography sx={{ fontSize: '20px' }}>
                            1 Central Street, Boston
                            (entrance from the store)
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={2} mt={5} color={"#f1cdb3"}
                        justifyContent={{ xs: 'center', md: 'start' }}>
                        <LocationOnIcon sx={{ fontSize: '50px' }} />
                        <Typography sx={{ fontSize: '20px' }}>
                          18 South Park, London
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item md={4} xs={12}>
                    <img src={footerimg} alt="footer" width="100%" height="auto"  />
                 
                
                </Grid>
            </Grid>

        </div >
    )
}

export default Footer