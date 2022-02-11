import "./App.css";
import { Route, Routes } from "react-router-dom";

import Album from "./components/Album";
import SignIn from "./components/Login";
import SignUp from "./components/Signup";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Album />} />
            <Route path="/login" exact element={<SignIn />} />
            <Route path="/signup" exact element={<SignUp />} />
        </Routes>
    );
}

export default App;
