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

export default function StaffCard({ name, title, subject, background }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <motion.button
                className="flex justify-center items-center w-[300px]"
                onClick={handleOpen}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <div className="w-[269px] bg-white flex flex-col justify-center py-[10px] pl-[10px] outline">
                    <div className="text-left">
                        <h5>{name}</h5>
                        <small>{title}</small>
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
                        {background}
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
