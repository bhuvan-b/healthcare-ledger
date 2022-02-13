import React, { useState, createContext } from "react";

const defaultData = {
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    aadharCard: "",
    phoneNumber: "",
    address: "",
};

const Datacontext = createContext();
const DataProvider = (props) => {
    const [formData, setformData] = useState(defaultData);
    const [flag, setFlag] = useState(false);
    return (
        <Datacontext.Provider
            value={{
                dataValues: [formData, setformData],
                dataFlag: [flag, setFlag],
            }}
        >
            {props.children}
        </Datacontext.Provider>
    );
};
export {Datacontext, DataProvider as default};