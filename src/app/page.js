"use client"
import React from 'react';
import { motion } from "framer-motion";
import DateCard from '@/components/dateCard';
import Marquee from "react-fast-marquee";
import { useScroll } from "framer-motion"
export default function Home() {
  const [animationComplete, setAnimationComplete] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };
  const date = [
    { dates: "01", day: "Mon" }, { dates: "02", day: "Tue" }, { dates: "03", day: "Wed" },
    { dates: "04", day: "Thu" }, { dates: "05", day: "Fri" }, { dates: "06", day: "Sat" },
    { dates: "07", day: "Sun" }, { dates: "06", day: "Sat" }, { dates: "07", day: "Sun" },
    { dates: "01", day: "Mon" }, { dates: "02", day: "Tue" }, { dates: "03", day: "Wed" },
    { dates: "04", day: "Thu" }, { dates: "05", day: "Fri" }, { dates: "06", day: "Sat" },
    { dates: "07", day: "Sun" }, { dates: "06", day: "Sat" }, { dates: "07", day: "Sun" }
  ];

  return (
    <main>
      {!animationComplete && (
        <div>
          {[1, 2].map((item) => (
            <motion.div
              key={item}
              initial={{ rotate: 30, x: -2000, y: 2000, scale: 2 }}
              animate={{
                x: [-2000, 0, item === 1 ? 500 : -500],
                y: [2000, 0, item === 1 ? -1200 : 1200],
                scale: [2, 2, 2],
              }}
              transition={{ duration: 1.5 }}
              className="w-[100vw] h-[50vh] bg-sky-900"
              onAnimationComplete={handleAnimationComplete}
            ></motion.div>
          ))}
        </div>
      )}
      {animationComplete && (
        <div className="h-screen">
          <motion.div
            initial={{ scale: 0.2, x: -2000, y: -200 }}
            animate={{ scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="align-middle pt-52 h-[50vh] text-white">
              <div className="w-[100vw] h-[40vh]  bg-sky-800 rotate-30 skew-y-[15deg] grid grid-flow-col">
                <div className="bg-purple-400">heyey</div>
                <div className="bg-yellow-400">
                  <Marquee style={{ width: "100%" }} speed={50}>
                    hey hye
                  </Marquee>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.2, x: 2000, y: -1000 }}
            animate={{ scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className=""
          >
            <div className="h-[35vh] skew-y-[-35deg]">
            <motion.div
            initial = {{borderBottom : "10px solid #fff", scale: 1}}
          whileHover={{borderBottom : "10px solid #fff",borderTop : "10px solid #fff", scale: 1.5}}
          className='h-[35vh]'>
              <Marquee style={{ height: "85%" }} speed = {10} >
                <div className="flex flex-row gap-x-20 pl-20 text-white text-8xl">
                  {date.map((item) => (
                    <div className="skew-y-[35deg]">
                      <DateCard dates={item.dates} day={item.day} />
                    </div>
                  ))}
                </div>
              </Marquee></motion.div>
              
            </div></motion.div>
          
        </div>
      )}
      <motion.div
      style={{ scaleY: scrollYProgress, opacity: scrollYProgress }}
      className='bottom-0 '
      >
      <footer className="  bg-gray-900 text-white py-4 px-6 h-[60vh] left-0 w-full">
        <p>gotcha lol</p>
      </footer></motion.div>
    </main>
  );
}
