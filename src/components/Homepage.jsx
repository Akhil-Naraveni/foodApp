import React, { createContext, useContext } from "react";
import { useState } from "react";
import Header from "./Header";
import Contentpage from "./Contentpage";

export const Globalcontext = createContext()

const Homepage = () =>{
    return(
        <Globalcontext.Provider>
            <>
            <Header />
            <Contentpage />
            </>
        </Globalcontext.Provider>
    )
}

export default Homepage;