// import { Container, Box, Typography, Button } from "@mui/material";
// import CardComponent from "../../Component/Card/Card";
// import cleaningImg from "./cleaningImg";
// // import cleaningImg2 from "./cleaningImg2";
// import { motion } from 'framer-motion';
// import Clients from "../Clients/Clients";
// import LineAnimations from "../../LineAnimations/LineAnimations";

// import { FaPhone } from "react-icons/fa6";

// // card container
// const conatinerStyle = {
//     display:'grid',
//     gap:4,
//     gridTemplateColumns:{sm: 'auto auto', lg:'auto auto auto'},
//     justifyContent:'center',
//     alignItems:'center',
//     minHeight:'100vh',
//     height:'100%',
//     mt:10,
// };

// const cardAnimation = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const bottomSectionAnimation = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//   };

// export default function Service() {
//     return(
//         <>
//          <Box
//             sx={{
//                 mt:'100px',
//                 backgroundColor:'#2287AC',
//                 color:'white',
//                 p:1
//             }}
//          >
//             <Typography
//                 variant="h3"
//                 textAlign={'center'}
//                fontFamily={'"Merienda", cursive'}
//             >
//                 Our Services
//             </Typography>
//          </Box>
//          {/* card container */}
//          <Container
//             sx={ conatinerStyle
//             }
//          >
//             {
//                 cleaningImg.map(
//                     (value,index) => (
//                         <motion.div
//                             key={index}
//                             variants={cardAnimation}
//                             exit="hidden"
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: false, amount: 0.2 }}
//                         >
//                             <CardComponent item={value}/>
//                         </motion.div>
//                     )
//                 )
//             }
//          </Container>
//         {/* <br/>
//         <Container
//             sx={{
//                 mt:0,
//                 ...conatinerStyle
//             }}
//         >
//             {
//                 cleaningImg2.map(
//                     (value,index) => (
//                         <motion.div
//                             key={index}
//                             variants={cardAnimation}
//                             exit="hidden"
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: false, amount: 0.2 }}
//                         >
//                             <CardComponent item={value}/>
//                         </motion.div>
//                     )
//                 )
//             }
//          </Container> */}
//          <div className='mt-5 pt-5'>
//             <motion.div
//                variants={cardAnimation}
//                exit="hidden"
//                initial="hidden"
//                whileInView="visible"
//                viewport={{ once: false, amount: 0.2 }}
//             >
//               <Clients/>
//             </motion.div>
//          </div>
//          <Box
//             sx={{
//                 display: 'flex',
//                 flexDirection: { xs: 'column', md: 'row' },
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 gap: 5,
//                 my: 5,
//                 px: 3,
//                 py:10
//               }}
//          >
//              <motion.div
//                 variants={bottomSectionAnimation}
//                 initial="hidden"
//                 whileInView="visible"
//                 exit="hidden"
//                 viewport={{ once: false, amount: 0.2 }}
//             >
//                 <Box sx={{ maxWidth: '400px' }}>
//                     <Typography
//                         variant="h5"
//                         textAlign={{ xs: 'center', md: 'left' }}
//                         mb={2}
//                         fontWeight="bold"
//                     >
//                         Transform your space with one call - book now and Thank Later!
//                     </Typography>
//                     <Box textAlign={{ xs: 'center', md: 'left' }}>
//                         <Button
//                             variant="contained"
//                             size="large"
//                             sx={{
//                             backgroundColor: '#2287AC',
//                             color: 'white',
//                             '&:hover': { backgroundColor: '#196D87', marginBottom:'50px' },
//                             }}
//                         >
//                           <FaPhone className="mx-2 fs-5" />  Book now
//                         </Button>
//                     </Box>
//                 </Box>
//             </motion.div>`

//         <motion.div
//                 variants={bottomSectionAnimation}
//                 initial="hidden"
//                 whileInView="visible"

//                 exit="hidden"
//                 viewport={{ once: false, amount: 0.2 }}
//             >
//             <Box
//                 sx={{
//                     position:'relative',
//                     width: '400px',
//                     height:'300px',
//                     marginLeft:'-100px',

//                 }}

//             >
//                 <Box
//                     component="img"
//                     src="https://i.pinimg.com/originals/f5/fb/5e/f5fb5efe6b9f1d5f11f19e69f67f5ccf.gif"
//                     alt="Image 2"
//                     sx={{
//                         width: 400,
//                         height: 400,
//                         borderRadius: '50%',
//                         objectFit: 'cover',
//                         position:'absolute',
//                         left:'15%',
//                         top:'-15%',
//                         marginTop:'50px'
//                     }}
//                 />
//                 <Box
//                  className="d-none d-md-flex"
//                     component="img"
//                     src="https://i.pinimg.com/originals/52/e6/90/52e6903d708b92ba12daf16cd6a2abdb.gif"
//                     alt="Image 1"
//                     sx={{
//                         width: 180,
//                         height: 200,
//                         borderRadius: '50%',
//                         objectFit: 'cover',
//                         position:'absolute',
//                         top:'35%'
//                     }}
//                 />
//                 <Box
//                      className="d-none d-md-flex"
//                     component="img"
//                     src="https://i.pinimg.com/originals/83/82/46/838246de8678959f4bba399b9ddc2996.gif"
//                     alt="Image 3"
//                     sx={{
//                         width: 250,
//                         height: 250,
//                         borderRadius: '50%',
//                         objectFit: 'cover',
//                         position:'absolute',
//                         left:'60%',
//                         top:'50%'
//                     }}
//                 />

//             </Box>
//         </motion.div>
//          </Box>
//          <LineAnimations />

//         </>
//     );
// };

import {
  Container,
  Box,
  Typography,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import CardComponent from "../../Component/Card/Card";
import cleaningImg from "./cleaningImg";
import { motion } from "framer-motion";
import Clients from "../Clients/Clients";
import LineAnimations from "../../LineAnimations/LineAnimations";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";

const conatinerStyle = {
  display: "grid",
  gap: 4,
  gridTemplateColumns: { sm: "auto auto", lg: "auto auto auto" },
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  height: "100%",
  mt: 10,
};

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const bottomSectionAnimation = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Service() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    vehicleName: "",
    vehicleNumber: "",
    duration: "",
  });

  const [successMsg, setSuccessMsg] = useState(false);



  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Here you can add your API logic
    handleClose();
    setSuccessMsg(true);
    alert("✅ Successfully vehicle booked. The owner will directly contact you within a few seconds.");

  };

  return (
    <>
      <Box
        sx={{
          mt: "250px",
        
          color: "#11343c",
          p: 1,
        }}
      >
        <Typography
          variant="h3"
          textAlign={"center"}
          className="agnee-clients"
          fontFamily={'"Merienda", cursive'}
        >
    Event Highlights
        </Typography>
      </Box>

      <Container sx={conatinerStyle}>
        {cleaningImg.map((value, index) => (
          <motion.div
            key={index}
            variants={cardAnimation}
            exit="hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <CardComponent item={value} />
          </motion.div>
        ))}
      </Container>

      <Box className="mt-5 pt-5">
        <motion.div
          variants={cardAnimation}
          exit="hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Clients />
        </motion.div>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
          my: 5,
          px: 3,
          py: 10,
        }}
      >
        <motion.div
          variants={bottomSectionAnimation}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Box sx={{ maxWidth: "400px" }}>
            <Typography
              variant="h5"
              textAlign={{ xs: "center", md: "left" }}
              mb={2}
              marginRight={4}
              fontWeight="bold"
              fontFamily= '"Merienda", cursive'
            >
     From flowers to grand halls, Raja Decors transforms it all – reserve today, celebrate tomorrow!
            </Typography>
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleOpen}
                sx={{
                 backgroundColor:"#11343c",
                  color: "#e8d671",
                  "&:hover": {
                   
                    marginBottom: "50px",
                  },
                }}
              >
                <FaPhone className="mx-2 fs-5" /> Book now
              </Button>
            </Box>
          </Box>
        </motion.div>

        <motion.div
          variants={bottomSectionAnimation}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Box
            sx={{
              position: "relative",
              width: "400px",
              height: "300px",
              marginLeft: "-100px",
            }}
          >
            <Box
              component="img"
              src="https://in.pinterest.com/pin/376754325095158205.gif"
              alt="Image 2"
              sx={{
                width: 400,
                height: 400,
                borderRadius: "50%",
                objectFit: "cover",
                position: "absolute",
                left: "15%",
                top: "-15%",
                marginTop: "50px",
              }}
            />
            <Box
              className="d-none d-md-flex"
              component="img"
              src="https://i.pinimg.com/originals/52/e6/90/52e6903d708b92ba12daf16cd6a2abdb.gif"
              alt="Image 1"
              sx={{
                width: 180,
                height: 200,
                borderRadius: "50%",
                objectFit: "cover",
                position: "absolute",
                top: "35%",
              }}
            />
            <Box
              className="d-none d-md-flex"
              component="img"
              src="https://i.pinimg.com/originals/83/82/46/838246de8678959f4bba399b9ddc2996.gif"
              alt="Image 3"
              sx={{
                width: 250,
                height: 250,
                borderRadius: "50%",
                objectFit: "cover",
                position: "absolute",
                left: "60%",
                top: "50%",
              }}
            />
          </Box>
        </motion.div>
      </Box>

      {/* Modal for booking form */}
      <Modal open={open} onClose={handleClose}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 400 },
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold" textAlign="center">
            Book Your Service
          </Typography>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            name="vehicleName"
            label="Vehicle Name"
            value={formData.vehicleName}
            onChange={handleChange}
            required
          />
          <TextField
            name="vehicleNumber"
            label="Phone Number"
            value={formData.vehicleNumber}
            onChange={handleChange}
            required
          />
          <TextField
            name="duration"
            label="Duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "#11343c" }}
          >
            Submit
          </Button>
        </Box>
      </Modal>

      {/* <LineAnimations /> */}
      {/* {successMsg && (
    <p style={{ color: "green", marginTop: "10px" }}>
      ✅ Successfully vehicle booked. The owner will directly contact you within a few seconds.
    </p>
  )} */}
    </>
  );
}
