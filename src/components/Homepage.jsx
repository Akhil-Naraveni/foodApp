import React, { createContext, useContext } from "react";
import { useState } from "react";
import Header from "./Header";

export const Globalcontext = createContext()

const Homepage = () =>{
    return(
        <Globalcontext.Provider>
            <>
            <Header />
            </>
        </Globalcontext.Provider>
    )
}

export default Homepage;