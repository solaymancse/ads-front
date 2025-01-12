"use client";

import React, { useState, useEffect } from 'react';
import { FormControl, TextField, Select, InputLabel, MenuItem, Button, Grid, Typography, Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LoadingBalls from "@/components/LoadingBalls";
import emailjs from "emailjs-com";

const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

// Ensure that 200 messages per month does not get exceeded and handle error accordingly (very rare)
export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        campus: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // before sending CHECK to make sure all fields are filled in,
        // check to see emails are valid
        // handle these errors accordingly before making the API request
        emailjs.send(
            serviceID,
            templateID,
            formData,
            publicKey
        ).then((response) => {
            setLoading(false);
            // handle showing user quick notif HERE to let them know it worked
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                campus: "",
                message: ""
            });
            setOpen(true);
        }).catch((err) => {
            // handle showing user quick notif to let them know it failed
            setLoading(false);
            console.log("FAILED", err);
        });
    };

    return (
        <div className="flex justify-center items-center h-full py-[100px] bg-[#1A1B2D]">
            <div className="flex flex-col gap-5 pad-[20px]">
                <h3 className="text-center text-[#5C5ADB] px-[100px]">You Can Also Contact Us by Form</h3>
                <div className="flex justify-center items-center">
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                        width: {
                            xs: "90%", // For screens smaller than 600px
                            sm: "80%", // For screens between 600px and 900px
                            md: "500px", // Default fixed width for larger screens
                        },
                        margin: "0 auto", // Center the form horizontally
                        }}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <FormControl
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        '& .MuiInputLabel-root': { color: '#FFFFFF' }, // Label color
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#FFFFFF', // Default border
                                                borderRadius: 0,
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#6B68FF', // Hover border
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#6B68FF', // Focused border
                                            },
                                            color: '#FFFFFF', // Text color
                                        },
                                        '& .MuiSelect-icon': {
                                            color: '#FFFFFF', // Dropdown arrow color
                                        },
                                    }}
                                >
                                    <InputLabel id="demo-simple-select-outlined-label">Campus</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={formData.campus}
                                        onChange={handleChange}
                                        label="Campus"
                                        className="text-white border-white"
                                        name="campus"
                                    >
                                        <MenuItem value={"ECC"}>ECC</MenuItem>
                                        <MenuItem value={"ADS North"}>ADS North</MenuItem>
                                        <MenuItem value={"ADS West"}>ADS West</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            {/* First Name and Last Name */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    label="First Name"
                                    name="firstName"
                                    onChange={handleChange}
                                    value={formData.firstName}
                                    required
                                    sx={{
                                        '& .MuiInputLabel-root': { color: '#FFFFFF' }, // Label color
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#FFFFFF', // Default border
                                                borderRadius: 0,
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#6B68FF', // Hover border
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#6B68FF', // Focused border
                                            },
                                            color: '#FFFFFF', // Text color
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    label="Last Name"
                                    name="lastName"
                                    onChange={handleChange}
                                    value={formData.lastName}
                                    required
                                    sx={{
                                        '& .MuiInputLabel-root': { color: '#FFFFFF' }, // Label color
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#FFFFFF', // Default border
                                                borderRadius: 0,
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#6B68FF', // Hover border
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#6B68FF', // Focused border
                                            },
                                            color: '#FFFFFF', // Text color
                                        },
                                    }}
                                />
                            </Grid>
                            {/* Email and Phone */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    required
                                    sx={{
                                        '& .MuiInputLabel-root': { color: '#FFFFFF' }, // Label color
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#FFFFFF', // Default border
                                                borderRadius: 0,
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#6B68FF', // Hover border
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#6B68FF', // Focused border
                                            },
                                            color: '#FFFFFF', // Text color
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    label="Phone"
                                    name="phone"
                                    onChange={handleChange}
                                    value={formData.phone}
                                    sx={{
                                        '& .MuiInputLabel-root': { color: '#FFFFFF' }, // Label color
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#FFFFFF', // Default border
                                                borderRadius: 0,
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#6B68FF', // Hover border
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#6B68FF', // Focused border
                                            },
                                            color: '#FFFFFF', // Text color
                                        },
                                    }}
                                />
                            </Grid>            
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label="Message"
                                    name="message"
                                    onChange={handleChange}
                                    value={formData.message}
                                    sx={{
                                        '& .MuiInputLabel-root': { color: '#FFFFFF' }, // Label color
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#FFFFFF', // Default border
                                                borderRadius: 0,
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#6B68FF', // Hover border
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#6B68FF', // Focused border
                                            },
                                            color: '#FFFFFF', // Text color
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    style={{ height: "37px", backgroundColor: '#6B68FF', color: '#FFFFFF', borderRadius: '0' }}
                                    disabled={loading}
                                    onClick={handleSubmit}
                                >
                                    {loading ? (
                                        <LoadingBalls/>
                                    ) : (
                                        "Submit"
                                    )}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {`Thank you for contacting us!`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        We will get back to you as soon as we can, so be sure to check the email you provided us. We look forward to speaking with you!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
