import { animate, motion } from "framer-motion";

const about = () => {
  return (
    <motion.div
      className="m-24 flex flex-col items-center bg-zinc-800 rounded-2xl gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <p className="text-6xl font-bold py-10">About Me</p>
      <div className="flex">
        <img src="/github.svg" alt="" className="w-60 m-10" />
        <div>
          <p className="text-3xl px-16 pb-24 flex-wrap">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            minus eaque voluptate corrupti odit, molestiae, vitae vel totam
            inventore earum aperiam. Quam voluptas repellendus corporis magnam,
            quos architecto beatae labore? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Pariatur, dignissimos praesentium
            expedita accusantium enim quam illo maxime facere unde voluptate
            exercitationem aliquam nulla reprehenderit, atque facilis accusamus
            earum consequatur totam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Natus dolorum, quasi deleniti voluptates quam sit
            ipsa similique doloremque hic incidunt et molestiae maxime dolores
            animi exercitationem culpa repudiandae quisquam aut!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default about;
