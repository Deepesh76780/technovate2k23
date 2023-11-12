"use client"
import { useEffect, useState } from 'react';

const useOrientation = () => {
    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
        const handleOrientationChange = (event) => {
            setIsPortrait(event.matches);
        };

        // Check if window is defined (runs only in a browser environment)
        if (typeof window !== 'undefined') {
            const mediaQuery = window.matchMedia('(orientation: portrait)');

            // Initial check
            setIsPortrait(mediaQuery.matches);

            // Attach a listener for changes
            mediaQuery.addEventListener('change', handleOrientationChange);

            // Cleanup the listener on component unmount
            return () => {
                mediaQuery.removeEventListener('change', handleOrientationChange);
            };
        }
    }, []);

    return isPortrait;
};

export default useOrientation;
