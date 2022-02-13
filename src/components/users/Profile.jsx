import React, { useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import "./profile.css";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Datacontext } from "../../context/PatientContext";

const auth = getAuth();
const db = getFirestore();

export default function Profile() {
  const navigate = useNavigate();
  const { dataValues } = useContext(Datacontext);
  const [formData, setformData] = dataValues;

  const userDocRef = doc(db, "Patient Details", auth?.currentUser?.email);
  const getDocument = () => {
    if (userDocRef && auth)
      (async () => {
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          console.log("rendered");
          setformData({
            firstName: docSnap.data().firstName,
            lastName: docSnap.data().lastName,
            email: docSnap.data().email,
            gender: docSnap.data().gender,
            dob: docSnap.data().dob,
            aadharCard: doc.Snap.data().aadharCard,
            phoneNumber: docSnap.data().phoneNumber,
            address: docSnap.data().address,
          });
        } else {
          console.log("No such document!");
        }
      })();
  };
  useEffect(() => {
    getDocument();
  }, []);

  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out Succesfully");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
        }}
        className="profile-box"
      >
        <nav aria-label="main mailbox folders">
          <div className="iconandtext">
            <div>
              <FontAwesomeIcon
                icon={faUserCircle}
                size={"6x"}
                sx={{ color: "white" }}
              />
            </div>
            <div>
              <Typography variant="h5" sx={{ color: "white" }}>
                Bhuvan Bokka
              </Typography>
            </div>
            <div>
              <Divider />
              <List>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableBody>
                      {/* {rows.map((row) => (
                        <TableRow
                          key={row.attr}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.attr}
                          </TableCell>
                          <TableCell align="right">{row.val}</TableCell>
                        </TableRow>
                       ))}  */}
                    </TableBody>
                  </Table>
                </TableContainer>
              </List>
            </div>
            {/* <div>
                            <Button variant="contained">Modify</Button>
                        </div> */}
            <div>
              <Button variant="contained" onClick={signUserOut}>
                Logout
              </Button>
            </div>
          </div>
        </nav>
        <Divider />
      </Box>
    </div>
  );
}
