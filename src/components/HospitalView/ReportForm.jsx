import React, { useState } from "react";
import { Grid, Typography, TextField, Container, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const ReportForm = () => {
  const [formData, setformData] = useState("");

  const submitForm = async (e) => {
    // setformData(e);
    console.log(e);
  };

  const { control, handleSubmit, reset } = useForm({
    defaultValues: formData,
  });
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Typography align="center" variant="h5" sx={{ m: 4 }}>
          Add Report
        </Typography>
        <form onSubmit={handleSubmit(submitForm)}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={6}>
              <Controller
                name="patientFirstName"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    onChange={onChange}
                    value={value}
                    variant="standard"
                    label="Patient First Name"
                    name="firstName"
                    required
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="patientLastName"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    onChange={onChange}
                    value={value}
                    variant="standard"
                    label="Patient Last Name"
                    name="lastName"
                    required
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="patientID"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    onChange={onChange}
                    value={value}
                    variant="standard"
                    label="Patient ID"
                    name="patientID"
                    required
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid item>
              <Controller
                name="date"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    onChange={onChange}
                    value={value}
                    variant="standard"
                    label="Date"
                    required
                    fullWidth
                    name="date"
                    type="date"
                    sx={{ width: 260 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Controller
                name="reportName"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    onChange={onChange}
                    value={value}
                    variant="standard"
                    label="Report Name"
                    name="reportName"
                    required
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Controller
                name="presNote"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    onChange={onChange}
                    value={value}
                    variant="standard"
                    label="Prescription Note"
                    name="presNote"
                    multiline
                    rows={5}
                    required
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Button type="submit" sx={{ m: 2 }} variant="contained">
              Submit
            </Button>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default ReportForm;
