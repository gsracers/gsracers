
import { motion } from "framer-motion"
import "../index.css"


const GlowCard2 = ({ img, tittle, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="h-[28rem] w-96 roboto-regular flex flex-col rounded-lg my-2 p-3 overflow-hidden 
        items-center bg-[#0a0a1a] hover:bg-[#0c0c20] border-2 gap-10 border-blue-900 duration-300 relative"
      style={{
        boxShadow: "0 0 20px rgba(30, 64, 175, 0.15)",
      }}
    >
      {/* Glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="absolute inset-0 bg-blue-900/5 blur-xl pointer-events-none"
      />

      <motion.div
        className="flex justify-center items-center h-1/2 h-max-1/2 w-11/12 relative overflow-hidden rounded-lg"
        whileHover={{ scale: 1.02 }}
      >
        <motion.div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent z-10" />
        <img className="h-full w-full object-cover" src={img || "/placeholder.svg"} alt={tittle} />
      </motion.div>

      <motion.div className="overflow-hidden flex-col justify-end h-1/2 w-11/12">
        <motion.h1
          whileHover={{ textShadow: "0 0 8px rgba(147, 197, 253, 0.5)" }}
          className="text-center p-2 font-bold text-xl text-blue-300 uppercase"
        >
          {tittle}
        </motion.h1>
        <ul className="text-center text-blue-200/80 press-start-2p-regular flex flex-col text-sm gap-1 list-disc list-inside">
          {content.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="text-left"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default GlowCard2

