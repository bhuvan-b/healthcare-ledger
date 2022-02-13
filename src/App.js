import "./App.css";
import { Route, Routes } from "react-router-dom";

import Album from "./components/Album";
import SignIn from "./components/Login";
import PatientData from "./components/PatientData";
import HospSignup from "./components/hospital/HospSignup";
import HospLogIn from "./components/hospital/HospLogIn";
import UserCard from "./components/users/userview/UserCard";
import HospitalCard from "./components/HospitalView/HospitalCard";
import DataProvider from "./context/PatientContext";
function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Album />} />
        <Route path="/login" exact element={<SignIn />} />
        <Route path="/patientdata" exact element={<PatientData />} />
        <Route path="/patient" exact element={<UserCard />} />
        <Route path="/hospsignup" exact element={<HospSignup />} />
        <Route path="/hosplogin" exact element={<HospLogIn />} />
        <Route path="/hospital" exact element={<HospitalCard />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
