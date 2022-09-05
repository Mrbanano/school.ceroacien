import Link from "next/link";
import { CardVariants } from "./Animation";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Item = ({ feacture }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={CardVariants}
    >
      <Link href={`course/${feacture?.path}`}>
        <div className="border-2 border-primary/25 w-full aspect-square rounded-lg flex flex-col  overflow-hidden bg-white shadow-xl">
          <div
            className=" h-1/2 bg-primary/50"
            style={{
              backgroundImage: `url("${feacture.banner}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className=" h-1/2 p-4 overflow-hidden">
            <h2 className="text-lg font-semibold">{feacture.title}</h2>
            <p>{feacture.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
