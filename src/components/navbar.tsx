import { motion } from "framer-motion";

interface NavProps {
  name: string;
}

const navbar = ({ name }: NavProps) => {
  return (
    <div>
      <motion.div
        className="font-mono text-4xl m-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {name}
      </motion.div>
    </div>
  );
};

export default navbar;
