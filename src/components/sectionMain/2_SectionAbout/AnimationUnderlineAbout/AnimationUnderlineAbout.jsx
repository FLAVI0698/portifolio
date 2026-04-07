import React, { useRef, useState, useEffect } from 'react'

export const AnimationUnderlineAbout = () => {
   const elementsRef = useRef(null);
   const [inView, setInView] = useState(null);

   useEffect(() => {
      if (!elementsRef.current) return;

      const observer = new IntersectionObserver(
         ([entry]) => {
            setInView(entry.isIntersecting);
            if (entry.isIntersecting) {
               setInView(entry.isIntersecting);
            }
         }, { threshold: 0.9 }
      );

      observer.observe(elementsRef.current);



      return () => observer.disconnect();
   }, []);

   return { elementsRef, inView };
}


