import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import bannerimg from '../../images/start-screen-puppy.png'
import { Link } from 'react-router-dom'
function MainBanner() {
    return (
        <div style={{
            background: '#39312d'
            , paddingTop: '10px'
        }}>
            <Grid container sx={{ width: { xs: '95%', md: '70%' } }} mx={"auto"} alignItems={"center"}>
                {/* =================text===================== */}
                <Grid item md={6} xs={12}>

                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: { md: 'start', xs: 'center' },
                            fontSize: { md: '2.75rem', xs: '1.5rem' },
                            lineHeight: '3.58rem',
                            letterSpacing: 0,
                            width: '19.3rem',
                            alignSelf: 'start',
                            color: "white",
                            margin:{xs:'auto',md:0}
                        }}
                    >
                        Not only people need a house
                    </Typography>
                    <Typography
                        mt={4}
                        variant="body1"
                        sx={{
                            fontSize: '0.94rem',
                            lineHeight: '1.5rem',
                            fontFamily: 'Arial',
                            width: { md: '27rem', xs: '20rem' },
                            color: "#fafafa",
                            margin: { md: '0', xs: 'auto' }
                        }}
                    >
                        We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!
                    </Typography>
                    <Box sx={{
                        width: { md: '27rem', xs: '15rem' },
                   
                        margin: { md: '0', xs: 'auto' }
                    }}>
                        <Link to={'/ourpets'} style={{ textDecoration: 'none' }}>
                    <Button

                        variant="contained"
                        sx={{
                            bgcolor: "  #f1cdb3",
                            color: "black",
                            marginTop: "1rem",
                            padding: { md: "14.5px 40.5px", xs: "10px 40px" },
                            borderRadius: "64px",
                            ":hover": {
                                bgcolor: "  #f1cdb3",
                            },
                        }}
                    >
                        Make a friend
                            </Button>
                            </Link>
                    </Box>

                </Grid>

                {/* =================image===================== */}
                <Grid item md={6} xs={12} sx={{
                    marginTop: {
                        xs:5,md:0
                }}}>
                    <img src={bannerimg} alt="dog" width={"100%"} height={"auto"} />
                </Grid>

            </Grid>
        </div>
    )
}

export default MainBanner