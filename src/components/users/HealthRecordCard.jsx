import { Typography } from "@mui/material";
import React from "react";
import HealthRecord from "./HealthRecord";
import { Box } from "@mui/material";
import "./healthrecordcard.css";

const HealthRecordCard = () => {
    return (
        <>
            <div className="health-card">
                <Typography variant="h4" className="headdingwh">
                    Health Reports
                </Typography>
                <div className="details">
                    <HealthRecord />
                </div>
            </div>
        </>
    );
};

export default HealthRecordCard;
