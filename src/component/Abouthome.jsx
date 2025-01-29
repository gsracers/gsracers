import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import imagedata from "../utils/imagedata";

const AboutHome = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="bg-blue-950/10 text-white min-h-screen font-racing relative">
      <div className="w-11/12 mx-auto pt-16 pb-24 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h1
            variants={cardVariants}
            className="text-6xl font-extrabold mb-4 font-proracing tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
            style={{ textShadow: "0 0 20px rgba(96, 165, 250, 0.5)" }}
          >
            ABOUT US
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"
          />
        </motion.div>

        {/* Sections with scroll-triggered animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-16 sm:grid-cols-1 lg:grid-cols-2"
        >
          {/* Our Legacy Section */}
          <Link to="/aboutus">
            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgb(31, 81, 255)",
              }}
              className="bg-[#0a0a1a] rounded-lg shadow-lg border border-blue-500/20 overflow-hidden flex flex-col h-full"
            >
              <div className="relative group">
                <motion.img
                  src={imagedata.legacy}
                  alt="Our Legacy"
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.8 }}
                />
              </div>
              <div className="p-6 flex-grow">
                <h2 className="text-3xl font-bold text-transparent font-trinos bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
                  OUR LEGACY
                </h2>
                <p className="text-blue-100/80">
                  GSRacers, established in 2007, boasts a rich history of
                  automotive engineering excellence, highlighted by a consistent
                  M-BAJA participation spanning 17 years and a remarkable
                  achievement of securing All India Rank 1 in 2014.
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Our Team Section */}
          <Link to="/team">
            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(96, 165, 250, 0.3)",
              }}
              className="bg-[#0a0a1a] rounded-lg shadow-lg border font-sans border-blue-500/20 overflow-hidden flex flex-col h-full"
            >
              <div className="relative group">
                <motion.img
                  src={imagedata.team_2324}
                  alt="Our Team"
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.8 }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaUsers className="text-6xl text-blue-400" />
                </motion.div>
              </div>
              <div className="p-6 flex-grow">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
                  OUR TEAM
                </h2>
                <p className="text-blue-100/80">
                  A dynamic and highly motivated group of SGSITS students, bound
                  together by a profound passion for off-road racing and an
                  unwavering commitment to pushing the boundaries of engineering
                  innovation.
                </p>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHome;
