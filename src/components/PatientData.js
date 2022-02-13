import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { Datacontext } from "../context/PatientContext";
import { getAuth } from "@firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();
const auth = getAuth();
const theme = createTheme();

export default function PatientData() {
  const { dataValues } = useContext(Datacontext);
  const [formData, setformData] = dataValues;
  const navigate = useNavigate();

  const createNew = async () => {
    await setDoc(doc(db, "Patient Details", auth?.currentUser.email), {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      aadharCard: formData.aadharCard,
      gender: formData.gender,
      dob: formData.dob,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
    });
  };

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    createNew()
      .then(() => {
        alert("Data stored Successfully!");
        navigate("/patient");
      })
      .catch((err) => {
        alert("Error occured"+err); 
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formData.firstName}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="AadhaarNumber"
                  label="Aadhaar Number"
                  name="aadharCard"
                  value={formData.aadharCard}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="DateOfBirth"
                  label="Date of Birth"
                  name="dob"
                  value={formData.dob}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel id="GenderGroup">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                    value={formData.gender}
                    onChange={onChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="ContactNumber"
                  label="Contact Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  type="address"
                  id="address"
                  value={formData.address}
                  onChange={onChange}
                />
              </Grid>
              {/* <Grid item xs={12}></Grid> */}
            </Grid>
            <Button
              onClick={submitForm}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            {/* <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Typography component={Link} to="/login" variant="body2">
                                    Already have an account? Sign in
                                </Typography>
                            </Grid>
                        </Grid> */}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography component={Link} to="/" variant="body2">
                  Back to Home
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
