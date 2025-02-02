import React from "react";
import { motion } from "framer-motion";
const ItemsCard = () =>{
    return(
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl shadow-md">
                  <div className="p-4">
                    <motion.img 
                      src={`https://img.freepik.com/free-psd/delicious-noodles-bowl-with-chopsticks_84443-42244.jpg?semt=ais_hybrid`} 
                      alt="food"
                      className="rounded-xl mb-2 image"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                     />
                    <h2 className=""> Recipe </h2>
                    <p className="">Description ..!</p>
                  </div>
                </div>
            </div>
          </div>
    )
}

export default ItemsCard;