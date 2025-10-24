// import { Box, Typography, Container, Grid } from "@mui/material";
// import MapComponent from '../../Component/MapComponent/MapComponent';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
// import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
// import Clients from "../Clients/Clients";
// import LineAnimations from "../../LineAnimations/LineAnimations";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function ContactUs() {
//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//     }, []);

//     return (
//         <>
//             <Box
//                 sx={{
//                     mt: '100px',
//                     backgroundColor: '#11343c',
//                     color: 'white',
//                     p: 1
//                 }}
//                 data-aos="fade-down"
//             >
//                 <Typography
//                     variant="h3"
//                     textAlign={'center'}
//                     fontFamily={'"Times New Roman", Times , serif'}
//                 >
//                     Contact Us
//                 </Typography>
//             </Box>
//             <Box sx={{ my: 3, py: 8 }} data-aos="fade-up">
//                 <Container>
//                     <Grid
//                         container
//                         rowGap={5}
//                         columnGap={1}
//                         sx={{
//                             justifyContent: { sm: "space-between", xs: 'center' },
//                         }}
//                     >
//                         <Grid item boxShadow={'2px 2px 5px #b8b1b1f7'} md={6} xs={12} data-aos="fade-right">
//                             <MapComponent />
//                         </Grid>
//                         <Grid item md={5} xs={12} data-aos="fade-left" className="mt-3">
//                             <Box
//                                 sx={{
//                                     display: 'grid',
//                                     rowGap: 3,
//                                 }}
//                             >
//                                 <Box>
//                                     <Typography
//                                         variant="h4"
//                                         sx={{
//                                             fontFamily: '"Times New Roman", Times , serif',
//                                             color: 'rgb(19, 115, 153)',
//                                             textAlign: { md: 'start', xs: 'center' }
//                                         }}
//                                     >
//                                         Get In Touch
//                                     </Typography>
//                                     <Typography
//                                         sx={{
//                                             fontFamily: '"Times New Roman", Times , serif',
//                                             color: 'grey',
//                                             width: { md: '100%' },
//                                             textAlign: { md: 'start', xs: 'center' }
//                                         }}
//                                     >
//                                     We’d love to hear from you! Feel free to contact us by phone or email—or drop by our office for a personal visit. We’re always here to help.</Typography>
//                                 </Box>
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                         gap: 2,
//                                     }}
//                                 >
//                                     <Box
//                                         sx={{
//                                             display: 'flex',
//                                             columnGap: 2,
//                                             color: 'black',
//                                             alignSelf: { xs: 'center', md: 'start' },
//                                             fontFamily: '"Times New Roman", Times , serif'
//                                         }}
//                                         data-aos="zoom-in"
//                                     >
//                                         <LocationOnOutlinedIcon sx={{ color: '#ea9390' }} />
//                                         <div>
//                                             <span>Abu Dhabi - United Arab Emirates,</span>
//                                             <br />
//                                             <span>Ajman - United Arab Emirates</span>
//                                         </div>
//                                     </Box>
//                                     <Box
//                                         sx={{
//                                             display: 'flex',
//                                             columnGap: 2,
//                                             color: 'black',
//                                             alignSelf: { xs: 'center', md: 'start' },
//                                             width: { xs: '280px', md: '100%' }
//                                         }}
//                                         color="inherit"
//                                         fontFamily={'"Times New Roman", Times , serif'}
//                                         data-aos="zoom-in"
//                                     >
//                                         <LocalPhoneOutlinedIcon sx={{ color: '#ea9390' }} />
//                                         <div>
//                                             <span>02-8766739,</span>
//                                             <br />
//                                             <span>0502697244,</span>
//                                             <br />
//                                             <span>0508797763</span>
//                                         </div>
//                                     </Box>
//                                     <Box
//                                         sx={{
//                                             display: 'flex',
//                                             columnGap: 2,
//                                             color: 'black',
//                                             alignSelf: { xs: 'center', md: 'start' },
//                                             width: { xs: '280px', md: '100%' }
//                                         }}
//                                         fontFamily={'"Times New Roman", Times , serif'}
//                                         data-aos="zoom-in"
//                                     >
//                                         <MailOutlineOutlinedIcon sx={{ color: '#ea9390' }} />
//                                         <div>
//                                             <span>agneecleaning123@gmail.com</span>
//                                             <br />
//                                             <span>Supershinecleaninginfo@gmail.com</span>
//                                         </div>
//                                     </Box>
//                                 </Box>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </Container>
//             </Box>
//             <Clients />
//             <LineAnimations />
//         </>
//     );
// }


import { Box, Typography, Container, Grid } from "@mui/material";
import MapComponent from '../../Component/MapComponent/MapComponent';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import Clients from "../Clients/Clients";
import LineAnimations from "../../LineAnimations/LineAnimations";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactUs() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            {/* Header Section */}
            <Box
                sx={{
                    mt: '100px',
                 
                    color: 'white',
                    p: 2
                }}
                data-aos="fade-down"
            >
                <Typography
                    variant="h3"
                    textAlign={'center'}
                    fontFamily={'"Times New Roman", Times , serif'}
                >
                    Contact Raja Decors
                </Typography>
            </Box>

            {/* Contact Section */}
            <Box sx={{ my: 3, py: 8 }} data-aos="fade-up">
                <Container>
                    <Grid
                        container
                        rowGap={5}
                        columnGap={1}
                        sx={{
                            justifyContent: { sm: "space-between", xs: 'center' },
                        }}
                    >
                        {/* Map */}
                        <Grid item boxShadow={'2px 2px 5px #b8b1b1f7'} md={6} xs={12} data-aos="fade-right">
                            <MapComponent />
                        </Grid>

                        {/* Contact Info */}
                        <Grid item md={5} xs={12} data-aos="fade-left" className="mt-3">
                            <Box
                                sx={{
                                    display: 'grid',
                                    rowGap: 3,
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontFamily: '"Times New Roman", Times , serif',
                                            color: '#1c5656ff',
                                            textAlign: { md: 'start', xs: 'center' }
                                        }}
                                    >
                                        Let’s Celebrate with Style!
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: '"Times New Roman", Times , serif',
                                            color: 'grey',
                                            width: { md: '100%' },
                                            textAlign: { md: 'start', xs: 'center' }
                                        }}
                                    >
                                        At <strong>Raja Decors</strong>, we bring magic to every event — from elegant <b>weddings</b> and vibrant <b>birthday parties</b> to dreamy <b>flower & balloon decorations</b> and grand <b>stage setups</b>.  
                                        Let’s make your celebration unforgettable!
                                    </Typography>
                                </Box>

                                {/* Address */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        columnGap: 2,
                                        color: 'black',
                                        alignSelf: { xs: 'center', md: 'start' },
                                        fontFamily: '"Times New Roman", Times , serif'
                                    }}
                                    data-aos="zoom-in"
                                >
                                    <LocationOnOutlinedIcon sx={{ color: '#ff6f61' }} />
                                    <div>
                                        <a 
                                            href="https://g.co/kgs/DDbaXfS" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: 'none', color: 'inherit' }}
                                        >
                                            <span>Click here for our Location</span>
                                        </a>
                                    </div>
                                </Box>

                                {/* Phone */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        columnGap: 2,
                                        color: 'black',
                                        alignSelf: { xs: 'center', md: 'start' },
                                    }}
                                    data-aos="zoom-in"
                                >
                                    <LocalPhoneOutlinedIcon sx={{ color: '#ff6f61' }} />
                                    <div>
                                        <span>099402 29923</span>
                                    </div>
                                </Box>

                                {/* Email (optional – if you want to show) */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        columnGap: 2,
                                        color: 'black',
                                        alignSelf: { xs: 'center', md: 'start' },
                                    }}
                                    data-aos="zoom-in"
                                >
                                    <MailOutlineOutlinedIcon sx={{ color: '#ff6f61' }} />
                                    <div>
                                        <span>rajadecors@gmail.com</span>
                                    </div>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Clients Section */}
            <Clients />

            {/* Menu (Décor Services) */}
            {/* <LineAnimations /> */}
        </>
    );
}

