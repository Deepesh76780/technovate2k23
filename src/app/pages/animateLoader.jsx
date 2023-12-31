"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const imageVariants = {
    initial: {
        scale: 1
    },
    animate: {
        scale: 1.1,
        transition: {
            stiffness: 300,
            duration: 0.8,
            repeatType: "mirror",
            repeat: Infinity
        }
    }
};

export default function Loading() {
    return (
        <div className='text-white min-h-[100dvh] flex justify-center items-center'>
            <motion.div className='relative h-24 w-24 scale-100' variants={imageVariants} animate="animate" initial="initial">
                <Image src='/logo/logo.png' fill alt='logo' priority />
            </motion.div>
        </div>
    );
}