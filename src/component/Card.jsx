
import { motion } from "framer-motion"


const Card = ({ category, price, features }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="flex flex-col rounded-xl bg-gradient-to-br from-blue-900/20 to-blue-900/10 shadow-lg overflow-hidden"
    >
      <div className="p-8 bg-blue-800/20 border-b border-blue-700/50">
        <h3 className="text-2xl font-bold text-blue-300 mb-2">{category}</h3>
        <p className="text-4xl font-extrabold text-yellow-300">{price}</p>
      </div>
      <ul className="flex-grow p-8 space-y-4">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="flex items-center space-x-3"
          >
            <svg className="flex-shrink-0 w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-blue-100">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Card

