import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import "./utilities/firebaseconfig";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore();
const theme = createTheme();

export default function Album() {
    const navigate = useNavigate();
    // navigate("/patient");

    const [curUser, setCurUser] = useState(auth.currentUser);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurUser(auth.currentUser);
            if (user) {
                console.log("User Signed In");
            } else console.log("User Signed out");
        });
    }, []);

    const signIn = () => {
        signInWithPopup(auth, provider)
          .then(async () => {
            const docSnap = await getDoc(
              doc(db, "studentsDetails", auth?.currentUser?.email)
            );
              if (docSnap.exists()) {
                  navigate("/patient");
              }
              else {
                  navigate("/patientdata", { replace: true });
              }
          })
          .catch((err) => {
            console.log(err);
          });
    };

    const signUserOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log("Signed Out Succesfully");
            })
            .catch((error) => {
                // An error happened.
                console.log("Error", error);
            });
    };

    return (
        <Container
            maxWidth="false"
            sx={{
                backgroundColor: "#21D4FD",
                backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
            }}
        >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <FontAwesomeIcon icon={faHospitalUser} />
                        <Typography sx={{ pl: 2 }} variant="h6" color="inherit" noWrap>
                            Report Ledger
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container>
                    {/* Hero unit */}
                    <Box
                        sx={{
                            bgcolor: "inherit",
                            pt: 8,
                            pb: 6,
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" color="common.white" gutterBottom>
                                Report Ledger
                            </Typography>
                            <Typography variant="h5" align="center" color="common.white" paragraph>
                                Report Ledger is an app that helps people in need to find the treatment they need with the power of the
                                blockchain
                            </Typography>
                            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
                                {!curUser ? (
                                    <Button onClick={signIn} variant="contained">
                                        LOGIN
                                    </Button>
                                ) : (
                                    <Button onClick={signUserOut} variant="contained">
                                        LOGOUT
                                    </Button>
                                )}
                                {/* <Button component={Link} to="/signup" variant="contained">
                                    SIGN UP
                                </Button> */}
                                <Button component={Link} to="/hospsignup" variant="contained">
                                    Hospital Sign Up
                                </Button>
                                <Button component={Link} to="/hosplogin" variant="contained">
                                    Hospital Log In
                                </Button>
                            </Stack>
                        </Container>
                    </Box>
                    <Container sx={{ py: 8 }} maxWidth="md">
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={
                                            {
                                                // 16:9
                                                // pt: "56.25%",
                                            }
                                        }
                                        image="https://i.imgur.com/oGHCiHF.png"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Hassle Free
                                        </Typography>
                                        <Typography>
                                            All your records being stored on the chain. You don't have to worry about anything to retrieve
                                            your data.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={
                                            {
                                                // 16:9
                                                // pt: "56.25%",
                                            }
                                        }
                                        image="https://media.istockphoto.com/vectors/homeland-security-gradient-color-papercut-style-icon-design-vector-id1202557533?k=20&m=1202557533&s=612x612&w=0&h=_Pobxq6kIrKE6Sf4P5YbMcsgW_-R1s3880D93Zwj764="
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Secure
                                        </Typography>
                                        <Typography>Powered by BlockChain. Decentralized storage to keep your records safe.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={
                                            {
                                                // 16:9
                                                // pt: "56.25%",
                                            }
                                        }
                                        image="https://www.graphicsprings.com/filestorage/stencils/20b77072d568765e4824d7ff2eb8a59d.png?width=500&height=500"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Connected
                                        </Typography>
                                        <Typography>No need of uninformed second decisions. Stay up to date with your health.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
                {/* Footer */}
                <Box sx={{ p: 6 }} component="footer">
                    <Typography variant="h6" align="center" gutterBottom>
                        Made By - Team Enigma
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                        Bhuvan, Jayant, Prakhar, Saksham
                    </Typography>
                    {/* <Copyright /> */}
                </Box>
                {/* End footer */}
            </ThemeProvider>
        </Container>
    );
}
