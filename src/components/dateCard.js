import React from 'react';
import { motion } from 'framer-motion';

const DateCard = ({ dates, day }) => {
    return (
        <motion.div
            initial={{ scale: 1, border: "0px solid #fff", rotate: 0, flexDirection: "column" }}
            whileTap={{ scale: 2, border: "10px solid #95eced", rotate: -35, flexDirection: "row" }}
            animate={{ scale: 1, border: "0px solid #fff", flexDirection: "column" }}
            className="text-6xl relative z-10 flex flex-auto "
        >
            <p>{dates}/</p>
            <h6>{day}</h6>
        </motion.div>
    );
};

export default DateCard;
