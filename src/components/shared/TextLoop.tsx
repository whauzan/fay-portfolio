"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  texts: string[];
}

const TextLoop = ({ texts }: Props) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const next = index + 1;
      setIndex(next % texts.length);
    }, 2000);

    // Clear the previous timeout on component unmount or before the next one is set
    return () => clearTimeout(timeoutId);
  }, [index, setIndex, texts]);

  return (
    <div className="relative inline w-fit overflow-hidden text-brand-red">
      <AnimatePresence initial={false}>
        <motion.span
          key={index}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0, transition: { duration: 0.2 } }}
          transition={{
            ease: "easeInOut",
            type: "spring",
            stiffness: 600,
            damping: 10,
          }}
          style={{ position: "absolute", width: "33rem" }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TextLoop;
