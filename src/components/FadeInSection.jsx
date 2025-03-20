// src/components/FadeInSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const FadeInSection = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
            style={{ willChange: "opacity, transform" }}
        >
            {children}
        </motion.div>
    );
};


export default FadeInSection;
