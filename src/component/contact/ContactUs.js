import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import contactimg from '../../images/donation-dog.png'
import card from '../../images/credit-card.svg'
function ContactUs() {
  return (
      <div style={{
          background: '#f6f6f6',
          padding: '70px 0px'
      }} >
          <Grid container sx={{ width: { xs: '95%', md: '50%' } }} mx={"auto"} alignItems={"center"} spacing={4} >
              {/* =================image===================== */}
              <Grid item md={6} xs={12}>
                  <img src={contactimg} alt="pets" width={"100%"} style={{
                     
                  }} height={"auto"} />
              </Grid>
              {/* =================text===================== */}
              <Grid item md={6} xs={12} order={{xs:'-1',md:'0'}}>

                  <Typography
                      variant="h2"
                      sx={{
                          width: { md: '25rem' ,xs:'20rem'},
                          fontSize: '2.19rem',
                          lineHeight: ' 2.84rem',
                          maxWidth: ' 22.13rem',
                          letterSpacing: '0.06em',
                          color: '#545454',
                          margin:{xs:'auto',md:0}
                          
                      }}
                  >
                      You can also
                      make a donation
                  </Typography>
                  <Typography sx={{
                      textAlign: {
                          xs: 'center',md:'start'
                  }}}>
                      Name of the bank / Type of bank account
                  </Typography>
                  <Box sx={{
                      width: {
                          xs: '100%',
                          sm: '70%',
                          md:'100%'
                      },
                      margin:'auto'
                  }}>
                      <Button
                          sx={{
                              fontWeight: 700,
                              width: { md: '55%', xs: '70%', sm: '50%' },
                              bgcolor: '#f1cdb3',
                              marginLeft: { sm: '100px', md: 0 },
                              color: '#545454',
                              ":hover": {
                                  bgcolor: '#f1cdb3'
                              }
                          }}>
                          <img src={card} alt="card" />
                          <Typography sx={{ color: '#545454', fontWeight: 700, marginLeft: '20px' }}>
                              1234 5678 9012 3456
                          </Typography>
                      </Button>
                  </Box>
               
                  <Typography
                      pt={4}
                      variant="body1"
                      sx={{
                          fontSize: '0.94rem',
                          lineHeight: '1.5rem',
                          fontFamily: 'Arial',
                          width: { md: '27rem', xs: '20rem' },
                          color: "#b2b2b2",
                          fontStyle: 'italic',
                          margin:{xs:'auto',md:0}

                      }}
                  >Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  </Typography>
                  
              </Grid>
          </Grid>
      </div>
  )
}

export default ContactUs