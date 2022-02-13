import React from "react";
import Grid from "@mui/material/Grid";
import HealthRecordCard from "../HealthRecordCard";
import Profile from "../Profile";
import "./usercard.css";
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const UserCard = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <FontAwesomeIcon icon={faHospitalUser} />
          <Typography sx={{ pl: 2 }} variant="h6" color="inherit" noWrap>
            Report Ledger
          </Typography>
          <Link to='/patientdata' style={{ color: "black", textDecoration: "None" }}>
				<Button variant='contained' style={{ background: "white", marginLeft: "10px" }}>
					Update details
				</Button>
			</Link>
        </Toolbar>
      </AppBar>
      <div className="usercard">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Profile />
          </Grid>
          <Grid item xs={8}>
            <HealthRecordCard />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default UserCard;
