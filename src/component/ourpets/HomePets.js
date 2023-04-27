import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import petsdata from './Data';
import { Link } from 'react-router-dom';

function HomePets() {
    return (
        <div style={{
            background: '#f6f6f6',
            padding: '70px 0px'
        }}>
            <Typography variant='h2' sx={{
                textAlign: 'center',
                margin: 'auto',
                width: { md: '25rem', xs: '15rem' },
                fontSize: { md: '2.19rem', xs: '1.49rem' },
                lineHeight: ' 2.84rem',
                maxWidth: ' 23.13rem',
                letterSpacing: '0.06em',
                color: '#545454'

            }}>
                Our friends who are looking for a house
            </Typography>


            <Grid container sx={{ width: { xs: '90%', md: '60%' } }} mx={'auto'} mt={3} spacing={2}>
                {petsdata.slice(0, 5).sort(() => Math.random() - 0.5).map((item) => {
                    return (
                        <Grid item md={4} xs={12} sm={6}>
                            <Card sx={{ textAlign: 'center' }}>
                                <CardMedia
                                    component="img"
                                    sx={{

                                    }}
                                    image={item.imgurl}
                                    alt="random"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.title}
                                    </Typography>

                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: 'white',
                                            border: " 1px solid #f1cdb3",
                                            color: "black",
                                            marginTop: "0.5rem",
                                            marginBottom: "0.5rem",
                                            padding: { md: "14.5px 40.5px", xs: "10px 40px" },
                                            borderRadius: "64px",
                                            ":hover": {
                                                bgcolor: "  #f1cdb3",
                                            },
                                        }}
                                    >

                                        Learn more
                                    </Button>

                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}

            </Grid>

            <Box justifyContent={"center"} sx={{ width: { xs: '70%', sm: '35%', md: '15%' } }} mx={'auto'} mt={2}>
                <Link to={'/ourpets'} style={{textDecoration:'none'}}>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: '#f1cdb3',
                        color: "black",
                        marginTop: "0.5rem",
                        marginBottom: "0.5rem",
                        padding: { md: "14.5px 40.5px", xs: "10px 40px" },
                        borderRadius: "64px",
                        ":hover": {
                            bgcolor: "  #f1cdb3",
                        },
                    }}
                >

                    Get to know the rest
                </Button>
                </Link>
            </Box>

        </div>
    )
}

export default HomePets


