"use client";

import React, { useState, useEffect, Fragment } from "react";
import SectionHeader from "@/components/SectionHeader";
import LoadingBalls from "@/components/LoadingBalls";
import Button from "./Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar"
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// also verify to user that they are now added to newsletter if api call was successful
export default function NewsLetter() {

    const [email, setEmail] = useState("");
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState("");
    const [loading, setLoading] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };
    

    const validateEmail = () => {
        return emailRegex.test(email);
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            if (response.ok) {
                // Success: Show success 
                setError(false);
                setHelperText("");
                setEmail('');
            } else {
                // Error: Check for specific error status
                if (response.status === 500) {
                    // Handle the 500 error specifically
                    setError(true);
                    setHelperText("Provided email already subscrbed.");
                } else {
                    // Handle other errors
                    setError(true);
                    setHelperText("Something went wrong. Please try again.")
                }
            }
        } catch (err) {
            // Unexpected error (network issue, etc.)
            setError(true);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="my-[80px]">
            <div className="w-full mx-auto flex justify-center items-center flex-col mb-5">
                <h1 className={"text-[#1d1d36] uppercase text-center font-semibold"}>SIGN UP FOR SCHOOL NEWS</h1>
                <p className="text-center w-[500px] font-light leading-7">Stay up-to-date with the latest news</p>
            </div>
            <div className="max-w-4xl mx-auto mt-0 px-6 xl:px-0">
                <small className="font-extralight">Enter your email here</small>
                <div className=" py-2">
                    <TextField
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={error}
                        helperText={helperText}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '0', // No rounding
                                padding: '0',
                                '& input': {
                                    outline: 'none',
                                    width: '100%',
                                    height: '100%',
                                    padding: '10px 8px',
                                },
                                '& fieldset': {
                                    border: '1px solid #000', // Black border
                                },
                                '&:hover fieldset': {
                                    borderColor: '#282D7A', // Hover border color
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#282D7A', // Focus border color
                                },
                            },
                        }}              
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="p-2 rounded-none"/>
                        <small className="font-extralight">Yes, subscribe me to your newsletter.</small>
                    </div>
                    <button
                        className="font-extralight px-[20px] text-centerpx-4 bg-[#282D7A] py-2 text-white text-center inline-block no-underline hover:bg-[#4276B3] transition-colors duration-300 ease-in-out"
                        onClick={handleSubscribe}
                    >
                        {loading ? (
                            <LoadingBalls/>
                        ) : (
                            "Subscribe"
                        )}
                    </button>
                    <Snackbar
                        open={notifOpen}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Note archived"
                        action={(
                            <React.Fragment>
                                <IconButton
                                    size="small"
                                    aria-label="close"
                                    color="inherit"
                                    onClick={handleClose}
                                >
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </React.Fragment>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};