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
import { FaPhone } from "react-icons/fa6";
import React, { useState, useEffect } from "react";


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

export default function Service({ topMargin = "250px" }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    eventName: "",
    contactNumber: "",
    eventDate: "",
  });

  // Generate booking ID whenever modal opens
  useEffect(() => {
    if (open) {
      const randomId = "BK" + Math.floor(1000 + Math.random() * 9000);
      setFormData((prev) => ({ ...prev, id: randomId }));
    }
  }, [open]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setFormData({
      id: "",
      name: "",
      eventName: "",
      contactNumber: "",
      eventDate: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ownerPhone = "09940229923"; // Replace with real number
    const message = `✅ Booking Confirmed!
Booking ID: ${formData.id}
Name: ${formData.name}
Event: ${formData.eventName}
Phone: ${formData.contactNumber}
Date: ${formData.eventDate}`;

    const url = `https://wa.me/91${ownerPhone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");

    alert("✅ Successfully booked. The owner will contact you shortly.");
    handleClose();
  };

  return (
    <>
      <Box
        sx={{
          mt: topMargin,
          color: "#11343c",
          p: 1,
        }}
      >
        <Typography
          variant="h3"
          textAlign={"center"}
          className="agnee-clients"
          fontFamily={'"Times New Roman", Times , serif'}
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

      {/* Booking Section */}
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
          <Box sx={{}}>
            <Typography
              variant="h5"
              textAlign={{ xs: "center", md: "left" }}
              mb={2}
             
              fontWeight="bold"
              fontFamily='"Times New Roman", Times , serif'
            >
              From flowers to grand halls, Raja Decors transforms it all – reserve
              today, celebrate tomorrow!
            </Typography>
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleOpen}
                sx={{
                  backgroundColor: "#11343c",
                  color: "#e8d671",
                }}
              >
                <FaPhone className="mx-2 fs-5" /> Book now
              </Button>
            </Box>
          </Box>
        </motion.div>

        {/* Right Side Images */}
        <motion.div
          variants={bottomSectionAnimation}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* <Box
            sx={{
              position: "relative",
              width: "400px",
              height: "300px",
              marginLeft: "-100px",
            }}
          >
            <Box
            className="image-round"
              component="img"
              src="https://i.pinimg.com/1200x/bc/f3/e6/bcf3e66303bcbe196c5488f256505f0a.jpg"
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
              src="https://i.pinimg.com/originals/b2/7e/37/b27e375f36688e47814300aa0948cb72.gif"
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
              src="https://i.pinimg.com/736x/06/f2/1c/06f21c3497b41c9966c62547f1d3e284.jpg"
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
          </Box> */}
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
            name="eventName"
            label="Event Name"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
          <TextField
            name="contactNumber"
            label="Contact Number"
            type="number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
          <TextField
            name="eventDate"
            type="date"
            label="Event Date"
            value={formData.eventDate}
            onChange={handleChange}
            required
            InputLabelProps={{ shrink: true }}
          />

          <Typography variant="body1">
            <strong>Booking ID:</strong> {formData.id}
          </Typography>

          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "#11343c" }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
}
