import React, { useState, createContext } from "react";

const registrationData = {
    hospName: "",
    hospID: "",
    email: "",
    phoneNumber: "",
    address: "",
    ownership: "",
    password:"",
};

const HosDatacontext = createContext();
const HosDatacontextProvider = (props) => {
    const [register, setregister] = useState(registrationData);
    return (
      <HosDatacontext.Provider
        value={{
          hosDataValues: [register, setregister],
        }}
      ></HosDatacontext.Provider>
    );
};
export { HosDatacontext, HosDatacontextProvider as default };