import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import aboutimg from '../../images/about-pets.png'
function AboutTheShelter() {
    return (
        <div style={{
            padding: '70px 0px'
            
        }}>
            <Grid container sx={{ width: { xs: '95%', md: '50%' } }} mx={"auto"} alignItems={"center"} >
                {/* =================image===================== */}
                <Grid item md={6} xs={12}  sx={{
                    marginTop: {
                        xs:5,md:0
                    }
                }} >
                    <Box sx={{
                    margin:'auto',
                        width: { md: '100%', xs: '100%',sm:'40%'},
                    }}>
                        <img src={aboutimg} alt="pets" width={"100%"} height={"auto"} style={{
                            maxWidth: '18.75rem',
                        }} />
                    </Box>
                   
                </Grid>
                {/* =================text===================== */}
                <Grid item md={6} xs={12} order={{xs:'-1',md:0}}>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { md: '2.75rem', xs:'1.75rem'},
                            lineHeight: '3.58rem',
                            letterSpacing: 0,

                            color: "#545454",
                            textAlign:{md:'start',xs:'center'}
                        }}
                    >

                        About the shelter
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { md: '2.75rem', xs: '1.75rem' },
                            lineHeight: '3.58rem',
                            letterSpacing: 0,
                            color: "#545454",
                            textAlign: { md: 'start', xs: 'center' }
                        }}
                    >

                        “Cozy House”
                    </Typography>
                    <Typography
                        pt={4}
                        variant="body1"
                        sx={{
                            fontSize: '0.94rem',
                            lineHeight: '1.5rem',
                            fontFamily: 'Arial',
                            width: { md: '27rem', xs: '20rem',sm:'25rem' },
                            color: "black",
                            margin: { xs: 'auto', md: 0 }

                        }}
                    >
                        Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.
                    </Typography>
                    <Typography
                     pt={4}
                        variant="body1"
                        sx={{
                            fontSize: '0.94rem',
                            lineHeight: '1.5rem',
                            fontFamily: 'Arial',
                            width: { md: '27rem', xs: '20rem', sm: '25rem' },
                            color: "black",
                            margin: { xs: 'auto', md: 0 },
                           

                        }}
                    >
                        We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.
                    </Typography>


                </Grid>



            </Grid>
        </div>
    )
}

export default AboutTheShelter