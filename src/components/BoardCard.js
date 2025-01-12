"use client";

import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

export default function BoardCard({ imgSrc, altText, name, title, description }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="w-[300px]">
            <motion.button
                className="relative font-sans"
                onClick={handleOpen}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <div className="flex w-fill h-[360px] relative z-10">
                    <div className="w-[800%] bg-black">
                        <img
                            src="/profilePicture.jpg"
                            alt="Profile Pic"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full"></div>
                </div>
                <div className="flex w-fill h-fill relative -mt-[30px] z-20">
                    <div className="w-[25px]"></div>
                    <div className="w-[269px] bg-white flex flex-col justify-center py-[10px] pl-[10px] outline">
                        <div className="text-left">
                            <h5>{name}</h5>
                            <small>{title}</small>
                        </div>
                    </div>
                </div>
            </motion.button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{name}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <IconButton onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </DialogActions>
            </Dialog>
        </div>
    );
};