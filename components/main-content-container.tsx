import { motion } from "framer-motion"
export default function MainContentContainer({ children, className }: { children: any, className: string }) {
  return (<div className={className}>
    <div className="lg:hidden">
      <motion.div>
        small screen
        {children}
      </motion.div>
    </div>
    <div className="sm:hidden">
      <motion.div>
        big screen
        {children}
      </motion.div>
    </div>
  </div>)
}
