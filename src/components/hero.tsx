import { motion } from "framer-motion";

const hero = () => {
  return (
    <div className="w-full text-black mt-24">
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <p className="font-nerko text-9xl text-amber-200">Hello!!</p>
        <p className="font-nerko text-9xl text-white">
          I'm Ajay. A sophomore CSE undergrad.
        </p>
      </motion.div>
    </div>
  );
};

export default hero;
