import React from "react";

const ItemsCard = () =>{
    return(
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to Foodie's Haven!</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="rounded-2xl shadow-md">
                  <div className="p-4">
                    <motion.img 
                      src={`https://img.freepik.com/free-psd/delicious-noodles-bowl-with-chopsticks_84443-42244.jpg?semt=ais_hybrid`} 
                      alt="food"
                      className="rounded-xl mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                     height="80px" width="70px"/>
                    <h2 className="text-xl font-semibold">Delicious Recipe {item}</h2>
                    <p className="text-sm text-gray-500">Explore this tasty treat and more!</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
    )
}

export default ItemsCard;