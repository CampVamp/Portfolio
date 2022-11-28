import { motion } from "framer-motion";

const hero = () => {
  return (
    <div className="w-full text-black mt-24">
      <motion.div>
        <p className="font-nerko text-9xl text-amber-200">Hello!!</p>
        <p className="font-nerko text-9xl text-white">
          I'm Ajay. A sophomore CSE undergrad.
        </p>
      </motion.div>
    </div>
  );
};

export default hero;
