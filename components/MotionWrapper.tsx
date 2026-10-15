
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
