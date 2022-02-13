import React from "react";
import Grid from "@mui/material/Grid";
import HospitalProfile from "./HospitalProfile";
import ReportForm from "./ReportForm";
import "./hospitalcard.css";

const HospitalCard = () => {
  return (
    <div className="hospitalcard">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <HospitalProfile />
        </Grid>
        <Grid item xs={8}>
          <ReportForm />
          {/* <HealthRecordCard /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default HospitalCard;
