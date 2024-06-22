import { motion } from "framer-motion"
import Spline from '@splinetool/react-spline'

export default function UpperThings() {
  return (<>
    <motion.div
      initial={{ opacity: 0.5, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <p className="bg-clip-text drop-shadow-2xl bg-gradient-to-b text-transparent from-white/100 to-white/40 text-3xl top-2 left-2 fixed">
        Mischa Strauss
      </p>
    </motion.div>
    <div className="relative z-40 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl space-y-4">
      <motion.div
        initial={{ opacity: 0.5, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div className="flex items-center justify-center w-min h-full">
          <Spline
            scene="https://prod.spline.design/VP-BUpeqTPwoXBdA/scene.splinecode"
          />
        </div>
      </motion.div>
    </div>
  </>)
}
