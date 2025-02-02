import React from "react";
import { motion } from "framer-motion";
import ItemsCard from "./Itemscard";
import "./Contentpage.css"
const Contentpage  =()=>{
    let cardList = [1,2,3,4,5]
    return (
        <>
        <div className="contentpage">
            <section className="contentpage__section">
                <h2>Summer Specials</h2>
                <div className="card-container">
                    {cardList.map((item) => (
                       <ItemsCard key={item} />
                    ))}
                </div>
            </section>
        </div>
        </>
    )
        
}

export default Contentpage;