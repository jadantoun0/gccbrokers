"use client";
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface Props {
    children: JSX.Element;
    type: 'fade' | 'scale'; 
    direction?: 'left' | 'right'; 
    delay?: number; 
    fullWidth?: boolean; 
}

const Reveal: React.FC<Props> = ({ children, type, direction = 'left', delay = 0, fullWidth }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants = {
        hidden: type === 'scale'
            ? { opacity: 0, scale: 0.5 } 
            : { opacity: 0, y: 0, x: direction === 'left' ? -100 : 100 }, 

        visible: type === 'scale'
            ? { opacity: 1, scale: 1 } 
            : { opacity: 1, y: 0, x: 0 },
    };

    return (
        <motion.div 
            ref={ref}
            className={`relative ${fullWidth ? 'w-full' : ''} overflow-hidden`}
            variants={variants}
            initial="hidden"
            animate={mainControls}
            transition={{
                duration: 0.5,
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
}

export default Reveal;
