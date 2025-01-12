"use client";

import { useState } from "react";
import StaffGrid from "@/components/StaffGrid";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function StaffCampusSelector({ eccStaff, adsNorthStaff, adsWestStaff }) {
    const [campus, setCampus] = useState("ECC");

    const handleChange = (event, newCampus) => {
        setCampus(newCampus);
    };

    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <ToggleButtonGroup
                color="primary"
                value={campus}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value="ECC">ECC</ToggleButton>
                <ToggleButton value="ADS North">ADS North</ToggleButton>
                <ToggleButton value="ADS West">ADS West</ToggleButton>
            </ToggleButtonGroup>
            <div className="felx justify-center">
                {campus === "ECC" && (
                    <StaffGrid staff={eccStaff}/>
                )}
                {campus === "ADS North" && (
                    <StaffGrid staff={adsNorthStaff}/>
                )}
                {campus === "ADS West" && (
                    <StaffGrid staff={adsWestStaff}/>
                )}
            </div>
        </div>
    );
};